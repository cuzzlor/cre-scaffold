import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class NetworkStateNotifier {
  public activeRequests = 0;
  private activeHandlers: Array<(active: boolean) => void> = [];
  private errorHandlers: Array<(error: string) => void> = [];

  constructor(instance: AxiosInstance) {
    instance.interceptors.request.use(this.onRequest.bind(this));
    instance.interceptors.response.use(
      this.onResponse.bind(this),
      this.onError.bind(this)
    );
  }

  public subscribeToActive(callback: (active: boolean) => void) {
    this.activeHandlers.push(callback);
  }
  public unsubscribeFromActive(callback: (active: boolean) => void) {
    const index = this.activeHandlers.indexOf(callback);
    if (index !== -1) this.activeHandlers.splice(index);
  }

  public subscribeToError(callback: (error: string) => void) {
    this.errorHandlers.push(callback);
  }
  public unsubscribeFromError(callback: (error: string) => void) {
    const index = this.errorHandlers.indexOf(callback);
    if (index !== -1) this.errorHandlers.splice(index);
  }

  private onRequest(config: AxiosRequestConfig) {
    this.incrementActive();
    return config;
  }
  private onResponse(response: AxiosResponse) {
    this.decrementActive();
    return response;
  }
  private onError(error: any) {
    this.decrementActive();
    this.notifyError(error.message);
    return Promise.reject(error);
  }

  private incrementActive() {
    this.activeRequests++;
    if (this.activeRequests === 1) this.notifyActiveChanged(true);
  }
  private decrementActive() {
    this.activeRequests--;
    if (this.activeRequests === 0) this.notifyActiveChanged(false);
  }

  private notifyActiveChanged(active: boolean) {
    this.activeHandlers.forEach((subscriber) => subscriber(active));
  }
  private notifyError(error: string) {
    this.errorHandlers.forEach((subscriber) => subscriber(error));
  }
}

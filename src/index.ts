export * from "./types";
export * from "./user";
export * from "./api";
export * from "./utils";

import { WebAppInfo } from "./types";
import { TelegramUser } from "./user";
import * as api from "./api";
import * as utils from "./utils";

export class TWASDK {
  private webAppInfo: WebAppInfo;
  public user: TelegramUser;

  constructor(initData: string) {
    if (!utils.validateInitData(initData)) {
      throw new Error("Invalid init data");
    }
    this.webAppInfo = JSON.parse(decodeURIComponent(initData)) as WebAppInfo;
    this.user = new TelegramUser(this.webAppInfo);
  }

  public async getBotInfo() {
    return api.getMe();
  }

  public async getUserProfilePhotos(userId: number) {
    return api.getUserProfilePhotos(userId);
  }
}

import { User, WebAppInfo } from "./types";
import { calculateAccountAge } from "./utils";

export class TelegramUser {
  private user: User;

  constructor(webAppInfo: WebAppInfo) {
    this.user = webAppInfo.initData.user || {} as User;
  }

  public getId(): number {
    return this.user.id;
  }

  public getUsername(): string | undefined {
    return this.user.username;
  }

  public getFullName(): string {
    return `${this.user.first_name} ${this.user.last_name || ""}`.trim();
  }

  public getLanguageCode(): string | undefined {
    return this.user.language_code;
  }

  public isPremium(): boolean {
    return this.user.is_premium || false;
  }

  public getAccountAge(): number {
    return calculateAccountAge(this.user.id);
  }
}

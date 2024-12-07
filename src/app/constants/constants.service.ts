import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  public readonly APP_TITLE: string = 'Aditi Rekhi';

  // emailjs constants
  public readonly EMAILJS_INIT_KEY: string = 'wKP6VugKyi9QQCAiw';
  public readonly EMAILJS_SERVICE_KEY: string = "service_ten88fl";
  public readonly EMAILJS_TEMPLATE_KEY: string = "template_cknbnhc";
}

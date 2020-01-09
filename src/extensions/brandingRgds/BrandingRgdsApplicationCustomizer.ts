import { override } from '@microsoft/decorators';
// import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
// import { Dialog } from '@microsoft/sp-dialog';

// import * as strings from 'BrandingRgdsApplicationCustomizerStrings';

// const LOG_SOURCE: string = 'BrandingRgdsApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IBrandingRgdsApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
  // tslint:disable-next-line: no-any
  cssUrl: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class BrandingRgdsApplicationCustomizer
  extends BaseApplicationCustomizer<IBrandingRgdsApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
   // Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    // const cssUrl: string = this.properties.cssUrl;
    console.log('loaded ' + this.properties.cssUrl);
    // inject the style sheet
    // tslint:disable-next-line: no-any
    const head: any = document.getElementsByTagName('head')[0] || document.documentElement;
    const customStyle: HTMLLinkElement = document.createElement('link');
    customStyle.href = 'http://intratest.infra.energie.local/Style%20Library/custom.css';
    customStyle.rel = 'stylesheet';
    customStyle.type = 'text/css';
    head.insertAdjacentElement('beforeEnd', customStyle);
    console.log('loaded ' + customStyle.href);
    return Promise.resolve();
  }
}

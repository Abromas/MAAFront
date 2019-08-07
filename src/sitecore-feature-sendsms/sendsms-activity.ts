import { SingleItem} from '@sitecore/ma-core';

export class SendSmsActivity extends SingleItem {
	
    getVisual(): string {
        const subTitle = 'Send SMS';
        const cssClass = this.isDefined ? '' : 'undefined';
        
        return `
            <div class="viewport-readonly-editor marketing-action ${cssClass}">
                <span class="icon">
                    <img src="/~/icon/People/32x32/mda.png" />
                </span>
                <p class="text with-subtitle" title="Send SMS">
                    Send SMS
                    <small class="subtitle" title="${subTitle}">${subTitle}</small>
                </p>
            </div>
        `;
    }

    get isDefined(): boolean {
        return true;
    }
}
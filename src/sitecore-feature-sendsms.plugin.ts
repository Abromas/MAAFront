import { Plugin } from '@sitecore/ma-core';
import { SendSmsActivity } from './sitecore-feature-sendsms/SendSms-activity';
import { SendSmsModuleNgFactory } from '../codegen/sitecore-feature-sendsms/SendSms-module.ngfactory';
import { ReadonlyEditorComponent } from '../codegen/sitecore-feature-sendsms/editor/readonly-editor.component';

// Use the @Plugin decorator to define all the activities the module contains.
@Plugin({
    activityDefinitions: [
        {
            // The ID must match the ID of the activity type description definition item in the CMS.
            id: '19BBDCE4-F48C-4D63-A7BB-4A1FDDEEA997'.toLowerCase(), 
            activity: SendSmsActivity,
            editorComponenet: ReadonlyEditorComponent,
            editorModuleFactory: SendSmsModuleNgFactory
        }
    ]
})
export default class SendSmsPlugin {}

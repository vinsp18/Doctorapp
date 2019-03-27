import { environment } from './environment/environment';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DialogflowProvider } from './../providers/dialogflow/dialogflow';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http , HttpModule } from '@angular/http';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

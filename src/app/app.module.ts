import { FuncaoComponent } from './component/funcao/funcao.component';
import { AppComponent } from './app.component';
import { ModalModule } from './modal/modal.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";

@NgModule({
  imports:  [
              BrowserModule,
              BrowserAnimationsModule,
              FormsModule,
              ModalModule,
              MatIconModule
            ],
  declarations: [AppComponent, FuncaoComponent],
  bootstrap:    [AppComponent]
})
export class AppModule {}

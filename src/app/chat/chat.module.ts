import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { TypingDirective } from './typing.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ChatbotComponent
  ],
  declarations: [ ChatbotComponent, TypingDirective ]
})
export class ChatModule {
}

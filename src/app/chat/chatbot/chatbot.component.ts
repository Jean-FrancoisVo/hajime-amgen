import { Component, OnInit } from '@angular/core';

declare let Chat: any;

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const chat = new Chat({
      greeting: [
        'Welcome to illusion.ai',
        'Our platform makes it easy to integrate highly customizable conversational interfaces into your web and mobile products.',


        {
          type: 'choose',
          answers: [{
            'text': 'Learn More',
            'path': 'learn_more'
          },
            {
              'text': 'Get Started',
              'path': 'get_started'
            }]
        }
      ],

      learn_more: [
        'With illusion.ai you can easily add conversational interfaces into your existing web apps. Our platforms looks great on web or mobile, and its super easy to add media like gifs, images, or videos. ',
        {
          type: 'choose',
          answers: [{
            'text': 'Lets\'s get started.',
            'path': 'get_started'
          }]
        }
      ],
      'get_started': [
        'Great lets get you started creating your first illusion.ai powred cnversation',
      ],
    }, {
      targetNode: '#chat'
    });
  }

}

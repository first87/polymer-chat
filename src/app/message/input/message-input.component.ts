import {Component, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as Tribute from 'tributejs';

@Component({
    selector: 'message-input',
    templateUrl: 'message-input.component.html',
    styleUrls: ['message-input.component.css']
})
export class MessageInputComponent implements OnInit {
    public form: FormGroup;
    @ViewChild('message')
    private message: ElementRef;
    private tribute: Tribute;

    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            message: ['', [Validators.required, Validators.minLength(1)]]
        });
    }

    ngOnInit(): void {
        this.tribute = new Tribute({
            values: [
                {
                    username: 'foo',
                    dispname: 'Mr. Foo'
                },
                {
                    username: 'bar',
                    dispname: 'Mr. Bar'
                }
            ],
            trigger: '@',
            menuContainer: document.body,
            selectTemplate: (item) => {
                return '@' + item.original.value.username;
            },
            menuItemTemplate: (item) => {
                return '<paper-item class="tribute-item">' +
                    '<paper-item-body class="body">' +
                    '<div class="username">@' + item.original.value.username + '</div>' +
                    '<div class="dispname">' + item.original.value.dispname + '</div>' +
                    '</paper-item>' +
                    '</paper-item>';
            },
            lookup: (original) => {
                return original.value.username + original.value.dispname;
            }
        });

        if (this.message) {
            const targetElement: any = this.message.nativeElement.shadowRoot.querySelector('#input').shadowRoot.querySelector('#textarea');
            targetElement.addEventListener('tribute-replaced', (e) => {
                this.form.setValue({
                    message: targetElement.value
                });
            });
            this.tribute.attach(targetElement);
        }
    }

    public sendMessage() {
        const msg = this.form.value.message;

        console.log('Sending new message: ' + msg);

        this.form.reset({
            message: ''
        });
    }

    public messageInputKeyPressed(e: any): void {
        if (e.keyCode === 13 && (e.code === 'Enter' || e.code === 'NumpadEnter') && !e.shiftKey) {
            if (!this.tribute.isActive) {
                this.sendMessage();
            }
            e.preventDefault();
        }
    }
}

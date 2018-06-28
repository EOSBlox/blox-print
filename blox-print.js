import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `blox-print`
 * A component that prints the given HTML
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BloxPrint extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      error: {
        type: String,
        notify: true,
        reflectToAttribute: true,
      },
      html: {
        type: String,
        observer: '_print'
      },
    };
  }

  _print(){
    this.print(this.html)
    .catch((err) => {
      this.error = err;
    })
  }
  print(htmlToPrint){
    return new Promise((resolve, reject) => {
      console.log(htmlToPrint)
      var printWindow=window.open('','','width=200,height=100');
      printWindow.document.write(htmlToPrint);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => { 
        printWindow.print(); 
      }, 500);
      printWindow.onfocus = () => { 
        setTimeout(() => { 
          printWindow.close(); 
          resolve();
        }, 500); 
      }
    })
  }

} window.customElements.define('blox-print', BloxPrint);

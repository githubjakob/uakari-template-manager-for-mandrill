import { EventEmitter } from 'fbemitter'
import HttpClient from '../httpClient'
import Dispatcher from '../dispatcher/dispatcher'

class TemplatesStore extends EventEmitter {

    constructor() {
        super()
        this.templates = [];
        window.templates = this.templates
    }

    handleActions(action) {
        console.log("template store received action", action)
        var self = this;
        switch(action.type) {
            case "API_KEY_ADDED": {
                console.log("API_KEY_ADDED")
                self._getTemplatesFromBackend();
            }
            break
            case "CREATE_NEW_TEMPLATE": {
                console.log("CREATE_NEW_TEMPLATE")
                self._createNewTemplate(action.formData);
            }
        }
    }

    _createNewTemplate(formData) {
        HttpClient.createNewHtmlTemplate(window.userId, formData)
        this.templates = this.templates.concat([{name: formData.name, html: formData.html}])
        this.emit("newTemplate")
    }


    _getTemplatesFromBackend() {
        console.log("getting templates from backend")
        var self = this;
        HttpClient.getHtmlTemplates(window.userId)
            .then(data => {
                console.log("received templates from backend", data)
                self.templates = self.templates.concat(data)
                self.emit("newTemplate")
            })
    }

    getAllTemplates() {
        return this.templates;
    }

}

const templatesStore = new TemplatesStore()
Dispatcher.register(templatesStore.handleActions.bind(templatesStore))

export default templatesStore
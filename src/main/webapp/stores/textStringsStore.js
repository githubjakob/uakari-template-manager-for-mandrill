import { EventEmitter } from 'fbemitter'
import HttpClient from '../httpClient'
import Dispatcher from '../dispatcher/dispatcher'

class TextStringsStore extends EventEmitter {

    constructor() {
        super()
        /*this.textStrings = [
            {id: 0, name: "name0", string: "string0"},
            {id: 1, name: "name1", string: "string1"},
            {id: 2, name: "name2", string: "string2"}
        ]*/
        this.textStrings = [];
    }

    getAllTextStrings() {
        console.log("getAllTextStrings")
        return this.textStrings;
    }

    handleActions(action) {
        console.log("textString store received action", action)
        var self = this;
        switch(action.type) {
            case "FIELD_CHANGE": {
                console.log("FIELD_CHANGE")
                self._updateTextString(action.data);
            }
            break
            case "ADD_ROW": {
                console.log("ADD_ROW")
                self.textStrings.push({id: self.textStrings.length, name: "", string: ""})
                window.textStrings = self.textStrings
                self.emit("change")
            }
            break
            case "API_KEY_ADDED": {
                self._getTextStringsFromBackend()
                self.emit("change")

            }
        }
    }

    _updateTextString(data) {
        console.log("updateTextString", data)
        this.textStrings[data.rowId][data.field] = data.value;
        window.textStrings = this.textStrings

        this.emit("asfd") // TODO why is this working?
    }

    _getTextStringsFromBackend() {
        var self = this;
        HttpClient.getTextStrings(window.userId).then(data => {
            console.log("received text strings", data)
            var result = data.map((entry, index) => {
                return {id: index, name: entry.name, string: entry.string}
            });
            console.log(result)
            self.textStrings = result;
            self.emit("change")
        })
    }
}

const textStringsStore = new TextStringsStore()
Dispatcher.register(textStringsStore.handleActions.bind(textStringsStore))

export default textStringsStore
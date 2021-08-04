
import BasicInput from '../BasicInput'
import BasicSelect from '../BasicSelect'
import DateTime from '../DateTime'
import AutoSelect from '../AutoSelect'
import MultiSelect from '../MultiSelect'
import Checkbox from '../CheckBox'
import Checkboxes from '../CheckBoxes'

export default {
    "text": {
        component: BasicInput,
        constProps: {
            inputType: "text"
        }
    },
    "text-block": {
        component: BasicInput,
        constProps: {
            inputType: "text",
            settings: {
                multiline: true,
                rowsMax: "7"
            }
        },
    },
    "datetime-browser": {
        component: BasicInput,
        constProps: {
            inputType: "datetime-local"
        }
    },
    "datetime-mui": {
        component: DateTime,
        constProps: {
        }
    },
    "number": {
        component: BasicInput,
        constProps: {
            inputType: "number"
        },
    },
    "basic-select": {
        component: BasicSelect,
        constProps: {
        },
    },
    "auto-select": {
        component: AutoSelect,
        constProps: {
        },
    },
    "multi-select": {
        component: MultiSelect,
        constProps: {
        },
    },
    "checkbox": {
        component: Checkbox,
        constProps: {
        },
    },
    "checkboxes": {
        component: Checkboxes,
        constProps: {
        },
      }
}
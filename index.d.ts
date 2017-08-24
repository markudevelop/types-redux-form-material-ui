// Type definitions for redux-form-material-ui v4.1.1
// Project: https://github.com/erikras/redux-form-material-ui
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types='material-ui'/>
/// <reference types='react'/>

// declare module 'redux-form-material-ui' {
//   export class AutoComplete extends React.Component<MaterialUI.AutoCompleteProps<any>, any> {}
//   export class Checkbox extends React.Component<MaterialUI.Switches.CheckboxProps, any> {}
//   export class TimePicker extends React.Component<MaterialUI.TimePickerProps, any> {}
//   export class DatePicker extends React.Component<MaterialUI.DatePicker.DatePickerProps, any> {}
//   export class RadioButtonGroup extends React.Component<MaterialUI.Switches.RadioButtonGroupProps, any> {}
//   export class SelectField extends React.Component<MaterialUI.SelectFieldProps, any> {}
//   export class Slider extends React.Component<MaterialUI.SliderProps, any> {}
//   export class TextField extends React.Component<MaterialUI.TextFieldProps, any> {}
//   export class Toggle extends React.Component<MaterialUI.Switches.ToggleProps, any> {}
// }

declare module 'redux-form-material-ui' {
  export class AutoComplete extends React.Component<{}, any> {}
  export class Checkbox extends React.Component<{}, any> {}
  export class TimePicker extends React.Component<{}, any> {}
  export class DatePicker extends React.Component<{}, any> {}
  export class RadioButtonGroup extends React.Component<{}, any> {}
  export class SelectField extends React.Component<{}, any> {}
  export class Slider extends React.Component<{}, any> {}
  export class TextField extends React.Component<{}, any> {}
  export class Toggle extends React.Component<{}, any> {}
}
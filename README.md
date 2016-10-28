# react-native-segment-tab(for Android/iOS)
segment-tab looks like ios component

![](http://ww2.sinaimg.cn/large/005zU9b3gw1f642kp0hzgj30af0iidg2.jpg)

## Install
`npm install react-native-segment-tab --save`

## Usage
```
  state = {
    selected: 0
  }
  render() {
    return (
      <View style={styles.container}>
        <SegmentTab
          data={['Day1', 'Day2', 'Day3']}
          selected={this.state.selected}
          onPress={ index => this.setState({selected: index})}
        />
        <SegmentTab
          style={{marginTop: 40}}
          activeColor='#4078bf'
          selected={this.state.selected}
          onPress={ index => this.setState({selected: index})}
          orientation='vertical'
        />
      </View>
    );
  }
```
## Props
 Name | Description | Default | Type
------|-------------|----------|-----------
data | titles of tabs  | `['One', 'Two', 'Three']` | array
titleSize  | fontSize for each title | `14`| number
orientation | direction of tabs | `vertical` or `horizontal` | string
horizontalWidth | width of tab when tab is horizontal layout| `200` | number
horizontalHeight | height of tab when tab is horizontal layout| `40` | number
verticalWidth | width of tab when tab is vertical layout| `100` | number
verticallHeight | height of tab when tab is vertical layout| `120` | number
borderRadius | borderRadius of whole tab | 5 | number
activeColor | color of an active tab item | `red`| string
inActiveColor | color of an inActive tab item, it will be color of its parent's backgroundColor if is null | null | string
textActiveColor | text of color in active tab | inActiveColor | string
textInActiveColor | text of color in inactive tab | activeColor | string
selected | index of selected tab item | 0 | number
tyle | you can add external for tab | null | View.propTypes.style
onPress | call-back function for each item | () => {} | func

## Notice:
  * Following idea of stateless component, `react-native-segment-tab` is designed without internal state, so you have to use `selected` and `onPress` props to response your interaction.
  * You'd better use the component with a wrapper view because segment-tab is a pure component.
  * If you have any question, just create [issues](https://github.com/Bob1993/react-native-segment-tab/issues) or send email to me: <poberwong@gmail.com>.
  
## License  
*MIT*  

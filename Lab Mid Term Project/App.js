
import React, { useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Agenda, Calendar } from 'react-native-calendars';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { LineChart, BarChart } from 'react-native-chart-kit'
//For chart creation
const data = {
  labels: ["Fajr", "Zuhr", "Asr", "Maghrib", "Esha",],
  datasets: [
    {
      data: [23, 22, 19, 20, 25],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      strokeWidth: 2
    }
  ],
  legend: ["Weekly report"]
};
const data1 = {
  labels: ["January", "Febrauy", "March"],
  datasets: [
    {
      data: [20, 15, 25],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
      strokeWidth: 2
    }
  ],
  legend: ["Monthly report"]
};


const chartConfig = {
  backgroundGradientFrom: "#green",
  //backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  //backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  //useShadowColorFromDataset: false
};
//const screenWidth = Dimensions.get("window").width;
//---------------------------------------------------------------------------------

//for radio button
const radioButtonsData = [
  {
    id: '1',
    label: 'Offered',
    value: 'option1',
    color: 'black',
    selected: true,
  },
  {
    id: '2',
    label: 'Unoffered',
    value: 'option2',
    color: 'black',
    selected: false,
  },
];


const radioButtonsData2 = [
  {
    id: '1',
    label: 'Offered',
    value: 'option1',
    color: 'black',
    selected: true,
  },
  {
    id: '2',
    label: 'Unoffered',
    value: 'option2',
    color: 'black',
    selected: false,
  },
];

const radioButtonsData3 = [
  {
    id: '1',
    label: 'Offered',
    value: 'option1',
    color: 'black',
    selected: true,
  },
  {
    id: '2',
    label: 'Unoffered',
    value: 'option2',
    color: 'black',
    selected: false,
  },
];

const radioButtonsData4 = [
  {
    id: '1',
    label: 'Offered',
    value: 'option1',
    color: 'black',
    selected: true,
  },
  {
    id: '2',
    label: 'Unoffered',
    value: 'option2',
    color: 'black',
    selected: false,
  },
];

const radioButtonsData5 = [
  {
    id: '1',
    label: 'Offered',
    value: 'option1',
    color: 'black',
    selected: true,
  },
  {
    id: '2',
    label: 'Unoffered',
    value: 'option2',
    color: 'black',
    selected: false,
  },
];

//-----------------------------------------------------------------------------------------
const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}
export const App = () => {
  //radio btn code-------------------
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = radioButtonsArray => {
    //console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
  };

  const [radioButtons2, setRadioButtons2] = useState(radioButtonsData2);

  const onPressRadioButton2 = radioButtonsArray => {
    //console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
  };

  const [radioButtons3, setRadioButtons3] = useState(radioButtonsData3);

  const onPressRadioButton3 = radioButtonsArray => {
    //console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
  };
  const [radioButtons4, setRadioButtons4] = useState(radioButtonsData4);

  const onPressRadioButton4 = radioButtonsArray => {
    //console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
  };
  const [radioButtons5, setRadioButtons5] = useState(radioButtonsData5);

  const onPressRadioButton5 = radioButtonsArray => {
    //console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
  };

  //---------------------------------------------------------------------
  const [items, setItems] = useState({});
  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }

      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  }

  return (
    <View style={{ height: 2000, width: 1200 }}>
      <View style={{ height: 500, width: 1000, marginLeft: 50 }}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          //current={date}
          selected={new Date()}
          minDate={'2018-01-12'}
          maxDate={new Date()}
        />
      </View>

      <View >
        <Image source={require('./fg.png')}
          style={{ height: 150, width: 150, alignItems: 'center', justifyContent: 'center', flex: 1 }} />
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={onPressRadioButton}
            layout="row"
          />
        </View>


        <Image source={require('./2.png')}
          style={{
            height: 150, width: 150, flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }} />

        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <RadioGroup
            radioButtons={radioButtons2}
            onPress={onPressRadioButton2}
            layout="row"
          />
        </View>

        <Image source={require('./3.png')}
          style={{ height: 150, width: 150 }} />
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <RadioGroup
            radioButtons={radioButtons3}
            onPress={onPressRadioButton3}
            layout="row"
          />
        </View>

        <Image source={require('./4.png')}
          style={{
            height: 150, width: 150, flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }} />
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <RadioGroup
            radioButtons={radioButtons4}
            onPress={onPressRadioButton4}
            layout="row"
          />
        </View>

        <Image source={require('./5.png')}
          style={{
            height: 150, width: 150, flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }} />

        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <RadioGroup
            radioButtons={radioButtons5}
            onPress={onPressRadioButton5}
            layout="row"
          />
        </View>

      </View>


      <View style={{ marginTop: 140 }}>
        <Text>Weekly Report</Text>
        <BarChart
          data={data}
          width={800}
          height={220}
          chartConfig={chartConfig}
        />

      </View>

      <View style={{ marginTop: 142 }}>
        <Text>Monthly Report</Text>
        <BarChart
          data={data1}
          width={800}
          height={220}
          chartConfig={chartConfig}
        />

      </View>


    </View>

  );
}
export default App;


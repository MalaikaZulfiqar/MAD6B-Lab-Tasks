
import React, { useState } from 'react';
import { View, Text, Image, Dimensions ,SafeAreaView} from 'react-native';
import { Agenda, Calendar } from 'react-native-calendars';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { LineChart, BarChart } from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';



//For chart creation
//const PrayerData={
 // date:"02-05-2022",
 // isOffered:[false,salse,true,false,true]
//}


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
  backgroundGradientTo: "#08130D",
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,

};

//---------------------------------------------------------------------------------

//for radio button
const radioButtonsData = [
  {
    id: '1',
    label: 'Offered',
    value: 'option1',
    color: 'black',
    //selected:true
    
  },
  {
    id: '2',
    label: 'Unoffered',
    value: 'option2',
    color: 'black',
    //selected:false
    
  },
];


const radioButtonsData2 = [
  {
    id: '1',
    label: 'Offered',
    value: 'option1',
    color: 'black',
    //selected:true
    
  },
  {
    id: '2',
    label: 'Unoffered',
    value: 'option2',
    color: 'black',
    //selected:false
  },
];

const radioButtonsData3 = [
  {
    id: '1',
    label: 'Offered',
    value: 'option1',
    color: 'black',
    //selected:true
  },
  {
    id: '2',
    label: 'Unoffered',
    value: 'option2',
    color: 'black',
    //selected:false
  },
];

const radioButtonsData4 = [
  {
    id: '1',
    label: 'Offered',
    value: 'option1',
    color: 'black',
    //selected:true
  },
  {
    id: '2',
    label: 'Unoffered',
    value: 'option2',
    color: 'black',
   // selected:false
  },
];

const radioButtonsData5 = [
  {
    id: '1',
    label: 'Offered',
    value: 'option1',
    color: 'black',
    //selected:true
  },
  {
    id: '2',
    label: 'Unoffered',
    value: 'option2',
    color: 'black',
    //selected:false
  },
];

//-----------------------------------------------------------------------------------------
const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}
export const App = () => {
const [Fajaroffered,setFajaroffered]=useState(false);
const [FajarNotoffered,setFajarNotoffered]=useState('');

const [Zuharoffered,setZuharoffered]=useState(false)
const [ZuharNotoffered,setZuharNotoffered]=useState('')

const [Asroffered,setAsroffered]=useState(false)
const [AsrNotoffered,setAsrNotoffered]=useState('')

const [Maghriboffered,setMaghriboffered]=useState(false)
const [MaghribNotoffered,setMaghribNotoffered]=useState('')

const [Ishaoffered,setIshaoffered]=useState(false)
const [IshaNotoffered,setIshaNotoffered]=useState('')

  //radio btn code-------------------
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = radioButtonsArray => {
    
    setRadioButtons(radioButtonsArray);
    if (radioButtons[0].selected==true){
      //console.log("offered")
      const setItem1=async=>{
        try{
       await AsyncStorage.setItem('P1',true);
       await getItem1()
      }
     
     catch (err) {
      console.log(err)
     }
    }
    }
  
    else if(radioButtons[1].selected==true)
    //console.log("Not offered")
     {const setItem1=async=>{
      try{
     await AsyncStorage.setItem('P1',false);

     await getItem1()
    }
   
   catch (err) {
    console.log(err)
   }
    
    }
  
  }  };

  const [radioButtons2, setRadioButtons2] = useState(radioButtonsData2);

  const onPressRadioButton2 = radioButtonsArray => {
    setRadioButtons2(radioButtonsArray);
    if (radioButtons2[0].selected==true)
      {
        //console.log("offered")
        const setItem2=async=>{
          try{
         await AsyncStorage.setItem('P2',true)
         await getItem2()
        }
       
       catch (err) {
        console.log(err)
       }
      }
      }
    
    else if(radioButtons2[1].selected==true){
    //console.log("Not offered")
    const setItem2=async=>{
      try{
     await AsyncStorage.setItem('P2',false)
     await getItem2()
    }
   
   catch (err) {
    console.log(err)
   }
  }
  }
 
  };

  const [radioButtons3, setRadioButtons3] = useState(radioButtonsData3);

  const onPressRadioButton3 = radioButtonsArray => {
      setRadioButtons(radioButtonsArray);
      
      if (radioButtons3[0].selected==true){
        //console.log("offered")
        const setItem3=async=>{
          try{
         await AsyncStorage.setItem('P3',true)
         await getItem3()
        }
       
       catch (err) {
        console.log(err)
       }
      }
  

      }
      else if(radioButtons3[1].selected==true)
      //console.log("Not offered")
     {
      const setItem3=async=>{
        try{
       await AsyncStorage.setItem('P3',false)
       await getItem3()
      }
     
     catch (err) {
      console.log(err)
     }
    }
     }
   
      
  };
  const [radioButtons4, setRadioButtons4] = useState(radioButtonsData4);

  const onPressRadioButton4 = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
    if (radioButtons4[0].selected==true){
      //console.log("offered")
      const setItem4=async=>{
        try{
       await AsyncStorage.setItem('P4',true)
       await getItem4()
      }
     
     catch (err) {
      console.log(err)
     }
    }
    }
    else if(radioButtons4[1].selected==true)
    //console.log("Not offered")
  {
    const setItem4=async=>{
      try{
     await AsyncStorage.setItem('P4',false)
     await getItem4()
    }
   
   catch (err) {
    console.log(err)
   }
  }
  }
   
  };
  const [radioButtons5, setRadioButtons5] = useState(radioButtonsData5);

  const onPressRadioButton5 = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
    if (radioButtons5[0].selected==true){
      //console.log("offered")
      const setItem5=async=>{
        try{
       await AsyncStorage.setItem('P5',true)
       await getItem5()
      }
     
     catch (err) {
      console.log(err)
     }
    }
    }
    else if(radioButtons5[1].selected==true)
    //console.log("Not offered")
     {
      const setItem5=async=>{
        try{
       await AsyncStorage.setItem('P5',false)
       await getItem5()
      }
     
     catch (err) {
      console.log(err)
     }
    }
     }
    
  };
  //...................Getting data from local storage-------------------
  const getItem1 = async () => {
    try {
      const d1 = await AsyncStorage.getItem("P1")
      
    }
    catch (err) {
      console.log(err)
    }
  }

  const getItem2 = async () => {
    try {
      const d2 = await AsyncStorage.getItem("P2")
      
    }
    catch (err) {
      console.log(err)
    }
  }
  const getItem3 = async () => {
    try {
      const d3 = await AsyncStorage.getItem("P3")
      
    }
    catch (err) {
      console.log(err)
    }
  }
  const getItem4 = async () => {
    try {
      const d4 = await AsyncStorage.getItem("P4")
      
    }
    catch (err) {
      console.log(err)
    }
  }
  const getItem5 = async () => {
    try {
      const d5 = await AsyncStorage.getItem("P5")
      
    }
    catch (err) {
      console.log(err)
    }
  }
 

  var Show_offer_record=[d1,d2,d3,d4,d5];
  console.log(Show_offer_record);
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
    <SafeAreaView style={{ height: 2000, width: 1200 }}>
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


    </SafeAreaView>

  );
}
export default App;


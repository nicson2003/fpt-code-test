import React, {useMemo} from 'react';
import {
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from 'react-native-chart-kit';
import {
  data,
  contributionData,
  pieChartData,
  progressChartData,
  chartConfigs,
} from './data';
import {styles} from './styles';

const width = Dimensions.get('window').width;
const height = 220;

const DashboardItem = () => {
  const ItemRender = props => {
    const {chartConfig} = props;
    const labelStyle = {
      color: chartConfig.color(),
      marginVertical: 10,
      textAlign: 'center',
      fontSize: 16,
    };
    return (
      <ScrollView
        key={chartConfig.id}
        style={{
          backgroundColor: chartConfig.backgroundColor,
        }}>
        <Text style={labelStyle}>Tasks Completed</Text>
        <LineChart
          data={data}
          width={width}
          height={height}
          chartConfig={chartConfig}
          bezier
          style={chartConfig.style}
        />
        <Text style={labelStyle}>Hours Burn down</Text>
        <ProgressChart
          data={progressChartData}
          width={width}
          height={height}
          chartConfig={chartConfig}
          style={chartConfig.style}
        />
        <Text style={labelStyle}>Watched Videos</Text>
        <BarChart
          width={width}
          height={height}
          data={data}
          chartConfig={chartConfig}
          style={chartConfig.style}
        />
        <Text style={labelStyle}>News Updates</Text>
        <PieChart
          data={pieChartData}
          height={height}
          width={width}
          chartConfig={chartConfig}
          accessor="population"
          style={chartConfig.style}
        />
        <Text style={labelStyle}>User Engagement</Text>
        <LineChart
          data={data}
          width={width}
          height={height}
          chartConfig={chartConfig}
          style={chartConfig.style}
        />
        <Text style={labelStyle}>Contributions</Text>
        <ContributionGraph
          values={contributionData}
          width={width}
          height={height}
          endDate={new Date('2016-05-01')}
          numDays={105}
          chartConfig={chartConfig}
          style={chartConfig.style}
        />
        <View style={styles.bottomPlaceHolder} />
      </ScrollView>
    );
  };

  const Separator = () => {
    return <View style={styles.separatorStyle} />;
  };

  return (
    <SafeAreaView style={styles.MainContainer}>
      <FlatList
        data={chartConfigs}
        renderItem={({item}) => <ItemRender chartConfig={item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        initialNumToRender={2}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </SafeAreaView>
  );
};

export default DashboardItem;

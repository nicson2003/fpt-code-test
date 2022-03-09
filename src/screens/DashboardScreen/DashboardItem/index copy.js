import React from 'react';
import {ScrollView, Dimensions, Text, View} from 'react-native';
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

const DashboardItem = () => {
  const width = Dimensions.get('window').width;
  const height = 220;
  const chartConfig = chartConfigs[8];
  const labelStyle = {
    color: chartConfig.color(),
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
  };

  return (
    <ScrollView
      key={Math.random()}
      style={{
        backgroundColor: chartConfig.backgroundColor,
      }}>
      <Text style={labelStyle}>Bezier Line Chart</Text>
      <LineChart
        data={data}
        width={width}
        height={height}
        chartConfig={chartConfig}
        bezier
        style={chartConfig.style}
      />
      <Text style={labelStyle}>Progress Chart</Text>
      <ProgressChart
        data={progressChartData}
        width={width}
        height={height}
        chartConfig={chartConfig}
        style={chartConfig.style}
      />
      <Text style={labelStyle}>Bar Graph</Text>
      <BarChart
        width={width}
        height={height}
        data={data}
        chartConfig={chartConfig}
        style={chartConfig.style}
      />
      <Text style={labelStyle}>Pie Chart</Text>
      <PieChart
        data={pieChartData}
        height={height}
        width={width}
        chartConfig={chartConfig}
        accessor="population"
        style={chartConfig.style}
      />
      <Text style={labelStyle}>Line Chart</Text>
      <LineChart
        data={data}
        width={width}
        height={height}
        chartConfig={chartConfig}
        style={chartConfig.style}
      />
      <Text style={labelStyle}>Contribution Graph</Text>
      <ContributionGraph
        values={contributionData}
        width={width}
        height={height}
        endDate={new Date('2016-05-01')}
        numDays={105}
        chartConfig={chartConfig}
        style={chartConfig.style}
      />
      <View style={{height: height / 2}}></View>
    </ScrollView>
  );
};

export default DashboardItem;

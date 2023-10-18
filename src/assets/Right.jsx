import { Chart } from 'react-google-charts'


export const Right = () => {
  return (
    <div className="right">
      <div className="chart-container">
        <div className="chart">
          <Chart
            width={'100%'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Task', 'Hours per Day'],
              ['Work', 11],
              ['Eat', 2],
              ['Commute', 2],
              ['Watch TV', 2],
              ['Sleep', 7],
            ]}
            options={{
              title: 'My Daily Activities',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </div>

        <div className="chart">
          <Chart
            width={'100%'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['City', '2010 Population', '2000 Population'],
              ['New York City, NY', 8175000, 8008000],
              ['Los Angeles, CA', 3792000, 3694000],
              ['Chicago, IL', 2695000, 2896000],
              ['Houston, TX', 2099000, 1953000],
              ['Philadelphia, PA', 1526000, 1517000],
            ]}
            options={{
              chart: {
                title: 'Population Comparison',
              },
            }}
            rootProps={{ 'data-testid': '2' }}
          />
        </div>

        <div className="chart">
          <Chart
            width={'100%'}
            height={'300px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Year', 'Sales', 'Expenses'],
              ['2013', 1000, 400],
              ['2014', 1170, 460],
              ['2015', 660, 1120],
              ['2016', 1030, 540],
            ]}
            options={{
              title: 'Company Performance',
            }}
            rootProps={{ 'data-testid': '3' }}
          />
        </div>
      </div>
    </div>
  )
}

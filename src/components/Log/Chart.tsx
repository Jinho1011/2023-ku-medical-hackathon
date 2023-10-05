import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const MyResponsiveBar = () => {
  const data = [
    {
      week: "9월 첫째주",
      탈선: 23,
      지리멸렬: 12,
      망상: 13,
      환각: 14,
      기이행동: 16,
    },
    {
      week: "9월 둘째주",
      탈선: 20,
      지리멸렬: 11,
      망상: 15,
      환각: 13,
      기이행동: 17,
    },
    {
      week: "9월 셋째주",
      탈선: 22,
      지리멸렬: 14,
      망상: 11,
      환각: 16,
      기이행동: 15,
    },
    {
      week: "9월 넷째주",
      탈선: 19,
      지리멸렬: 13,
      망상: 14,
      환각: 12,
      기이행동: 16,
    },
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={["탈선", "지리멸렬", "망상", "환각", "기이행동"]}
      indexBy="week"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.5}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "증상 발현(단위: 주)",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "발생건수",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};

export default MyResponsiveBar;

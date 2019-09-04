/*
 * @Author: zhanghongqiao@hiynn.com
 * @Date: 2018-03-30 10:13:23
 * @Description: 头部导航mock数据
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-12-07 13:09:38
 */
 
export default {
  url: '/function/getFunctionByUserId',
  // enableMock: true, // 是否使用本地假数据
  mock: {
    "erroCode":2000,
    "erroMsg":null,
    "result":[
      {
        "childList":null,
        "id":"2c92848f62ce22440162d2ecf46a0000",
        "menuName":"首页",
        "menuUrl":"/weather-web/airMonitoring/landingPage",
        "orderNo":1,
        "parentId":null
      },
      {
        "childList":null,
        "id":"2c92848f62ce22440162d2ee37a90001",
        "menuName":"监测地图",
        "menuUrl":"/weather-web/airMonitoring/realtimeHistoryIndex",
        "orderNo":2,
        "parentId":null
      },
      
      {
        "childList":null,
        "id":"c0f22c458f0a4a89aa98f99eefda241b",
        "menuName":"预报预警",
        "menuUrl":"/weather-web/forecastWarn/forecast",
        "orderNo":4,
        "parentId":null
      },
      {
        "childList":[
          {
            "childList":null,
            "id":"2c92848f640256f5016426802f9a0002",
            "menuName":"污染异常",
            "menuUrl":"/weather-web/surveyjob/abnormalGrid",
            "orderNo":1,
            "parentId":"2c92848f62ce22440162d32a256a0002"
          },
          {
            "childList":null,
            "id":"2c92848f61543d380161613630ad0001",
            "menuName":"勘查管理",
            "menuUrl":"/weather-web/surveyjob",
            "orderNo":2,
            "parentId":"2c92848f62ce22440162d32a256a0002"
          }
        ],
        "id":"2c92848f62ce22440162d32a256a0002",
        "menuName":"污染溯源",
        "menuUrl":"javascript:void(0)",
        "orderNo":5,
        "parentId":null
      },
      {
        "childList":[
          {
            "childList":null,
            "id":"402881255ce7a21b015ce82730ce0003",
            "menuName":"监测数据",
            "menuUrl":"/weather-web/statistics/dataOutput",
            "orderNo":1,
            "parentId":"4028f481585db7d701585dc6ae1f0016"
          },
          {
            "childList":null,
            "id":"2c9280dc5ad2347e015ad4ffde210008",
            "menuName":"城市日历",
            "menuUrl":"/weather-web/airCalendar/city_day_statics",
            "orderNo":2,
            "parentId":"4028f481585db7d701585dc6ae1f0016"
          },
          {
            "childList":null,
            "id":"2c9280dc5ad2347e015ad500c0110009",
            "menuName":"城市月历",
            "menuUrl":"/weather-web/airCalendar/city_month_statics",
            "orderNo":3,
            "parentId":"4028f481585db7d701585dc6ae1f0016"
          },
          {
            "childList":null,
            "id":"402882815d547e8a015d5481783f0001",
            "menuName":"历史同期数据分析",
            "menuUrl":"/weather-web/statistics/historyDataAnalysis",
            "orderNo":4,
            "parentId":"4028f481585db7d701585dc6ae1f0016"
          },
          {
            "childList":null,
            "id":"402881325e6e9fe1015e6ee56e7f0000",
            "menuName":"城市数据分析",
            "menuUrl":"/weather-web/multistation/index",
            "orderNo":6,
            "parentId":"4028f481585db7d701585dc6ae1f0016"
          },
          {
            "childList":null,
            "id":"402882815d547e8a015d5480f7c80000",
            "menuName":"超标统计",
            "menuUrl":"/weather-web/analysis/overproof",
            "orderNo":7,
            "parentId":"4028f481585db7d701585dc6ae1f0016"
          }
        ],
        "id":"4028f481585db7d701585dc6ae1f0016",
        "menuName":"统计分析",
        "menuUrl":"javascript:void(0)",
        "orderNo":6,
        "parentId":null
      },
      {
        "childList":[
          {
            "childList":null,
            "id":"402881245d972909015d972ceec20000",
            "menuName":"城市排名",
            "menuUrl":"/weather-web/cityData/cityRank",
            "orderNo":1,
            "parentId":"2c9280dc5a7a1513015a7db597ff0007"
          },
          {
            "childList":null,
            "id":"40284e81612b264901612b34e1b60000",
            "menuName":"区县目标管理",
            "menuUrl":"/weather-web/cityData/districtS_Manager",
            "orderNo":2,
            "parentId":"2c9280dc5a7a1513015a7db597ff0007"
          },
          {
            "childList":null,
            "id":"4028810f62184154016219052d5e0000",
            "menuName":"区县考核统计",
            "menuUrl":"/weather-web/cityData/districtS_analysis",
            "orderNo":3,
            "parentId":"2c9280dc5a7a1513015a7db597ff0007"
          }
        ],
        "id":"2c9280dc5a7a1513015a7db597ff0007",
        "menuName":"考核排名",
        "menuUrl":"javascript:void(0)",
        "orderNo":7,
        "parentId":null
      },
     
      {
        "childList":[
          {
            "childList":[
              {
                "childList":null,
                "id":"402882815e0ced03015e0cef148a0000",
                "menuName":"数据审核",
                "menuUrl":"/weather-web/statistics/dataAudit",
                "orderNo":1,
                "parentId":"2c92848461543d3701616108b9af0000"
              },
              {
                "childList":null,
                "id":"4028812c5de90f74015de912e7de0000",
                "menuName":"数据告警",
                "menuUrl":"/weather-web/warn/data/index",
                "orderNo":2,
                "parentId":"2c92848461543d3701616108b9af0000"
              },
              {
                "childList":null,
                "id":"402881e960c40d5e0160c47cecf40000",
                "menuName":"异常数据监控",
                "menuUrl":"/weather-web/warn/data/dataMonitor",
                "orderNo":3,
                "parentId":"2c92848461543d3701616108b9af0000"
              }
            ],
            "id":"2c92848461543d3701616108b9af0000",
            "menuName":"数据质控",
            "menuUrl":"javascript:void(0)",
            "orderNo":1,
            "parentId":"2c92848f62ce22440162d3367f830003"
          },
          {
            "childList":[
              {
                "childList":null,
                "id":"402881246095b8f1016095ceab660000",
                "menuName":"监测点管理",
                "menuUrl":"/weather-web/system/equipment/monitoring/index",
                "orderNo":1,
                "parentId":"2c9280dc5a7a1513015a7da9e0ab0002"
              },
              {
                "childList":null,
                "id":"2c9280dc5ad9cf37015ada1ab9ff0001",
                "menuName":"设备整机管理",
                "menuUrl":"/weather-web/station/index",
                "orderNo":2,
                "parentId":"2c9280dc5a7a1513015a7da9e0ab0002"
              },
              {
                "childList":null,
                "id":"2c9280dc5ad9cf37015ada1c0c2e0002",
                "menuName":"传感器管理",
                "menuUrl":"/weather-web/sensor/index",
                "orderNo":3,
                "parentId":"2c9280dc5a7a1513015a7da9e0ab0002"
              },
              {
                "childList":null,
                "id":"2c9280dc5ad9cf37015ada1ebb8b0003",
                "menuName":"设备状态",
                "menuUrl":"/weather-web/rest/station/equIndex",
                "orderNo":4,
                "parentId":"2c9280dc5a7a1513015a7da9e0ab0002"
              },
              {
                "childList":null,
                "id":"2c9280dc5ad9cf37015ada1f94300004",
                "menuName":"设备故障",
                "menuUrl":"/weather-web/rest/station/equFaultIndex",
                "orderNo":5,
                "parentId":"2c9280dc5a7a1513015a7da9e0ab0002"
              },
              {
                "childList":null,
                "id":"2c9280dc5ad9cf37015ada21409e0006",
                "menuName":"原始数据",
                "menuUrl":"/weather-web/data/environmental",
                "orderNo":6,
                "parentId":"2c9280dc5a7a1513015a7da9e0ab0002"
              },
              {
                "childList":null,
                "id":"4028813b5cce359f015cceb3a8370000",
                "menuName":"设备驯化",
                "menuUrl":"/weather-web/weather/deviceAdjustIndex",
                "orderNo":7,
                "parentId":"2c9280dc5a7a1513015a7da9e0ab0002"
              }
            ],
            "id":"2c9280dc5a7a1513015a7da9e0ab0002",
            "menuName":"设备管理",
            "menuUrl":"javascript:void(0)",
            "orderNo":2,
            "parentId":"2c92848f62ce22440162d3367f830003"
          },
          {
            "childList":[
              {
                "childList":null,
                "id":"2c9280dc5e3b4f35015e3c1b56200007",
                "menuName":"设备寻标",
                "menuUrl":"/weather-web/benchmark/index",
                "orderNo":1,
                "parentId":"2c92848461543d370161613a753b0002"
              },
              {
                "childList":null,
                "id":"8a53b7825e5a12c3015e5a2f96b1008f",
                "menuName":"参数计算",
                "menuUrl":"/weather-web/system/sensor/autocalibration",
                "orderNo":2,
                "parentId":"2c92848461543d370161613a753b0002"
              }
            ],
            "id":"2c92848461543d370161613a753b0002",
            "menuName":"自动化校准",
            "menuUrl":"javascript:void(0)",
            "orderNo":3,
            "parentId":"2c92848f62ce22440162d3367f830003"
          },
          {
            "childList":[
              {
                "childList":null,
                "id":"4028f481585db7d701585dbaa5b40001",
                "menuName":"组织管理",
                "menuUrl":"/weather-web/sys/organize",
                "orderNo":1,
                "parentId":"4028f481585d828301585d8f85f60000"
              },
              {
                "childList":null,
                "id":"2c9280dc5a7a1513015a7db26afd0005",
                "menuName":"用户管理",
                "menuUrl":"/weather-web/user/manager",
                "orderNo":2,
                "parentId":"4028f481585d828301585d8f85f60000"
              },
              {
                "childList":null,
                "id":"4028f481585db7d701585dbaa5b40002",
                "menuName":"项目管理",
                "menuUrl":"/weather-web/sys/project",
                "orderNo":3,
                "parentId":"4028f481585d828301585d8f85f60000"
              },
              {
                "childList":null,
                "id":"4028f481585db7d701585dbb82810001",
                "menuName":"角色管理",
                "menuUrl":"/weather-web/role/manager",
                "orderNo":4,
                "parentId":"4028f481585d828301585d8f85f60000"
              },
              {
                "childList":null,
                "id":"4028f481585db7d701585dbc2b620002",
                "menuName":"模块管理",
                "menuUrl":"/weather-web/function/sysFun",
                "orderNo":5,
                "parentId":"4028f481585d828301585d8f85f60000"
              },
              {
                "childList":null,
                "id":"402881e760df3de30160df42567d0000",
                "menuName":"操作日志",
                "menuUrl":"/weather-web/sys/operatingLog",
                "orderNo":7,
                "parentId":"4028f481585d828301585d8f85f60000"
              },
              {
                "childList":null,
                "id":"402881fa5b04c1e9015b04c4dede0000",
                "menuName":"经纬度转换",
                "menuUrl":"/weather-web/weather/stationLatLngIndex",
                "orderNo":9,
                "parentId":"4028f481585d828301585d8f85f60000"
              }
            ],
            "id":"4028f481585d828301585d8f85f60000",
            "menuName":"系统管理",
            "menuUrl":"javascript:void(0)",
            "orderNo":4,
            "parentId":"2c92848f62ce22440162d3367f830003"
          },
          {
            "childList":[
              {
                "childList":null,
                "id":"2c9280dc5ad9cf37015ada1949a60000",
                "menuName":"污染源管理",
                "menuUrl":"/weather-web/pollution/index",
                "orderNo":1,
                "parentId":"2c9280dc5a7a1513015a7dabab0f0003"
              },
              {
                "childList":null,
                "id":"2c9280dc5ad9cf37015ada21f8810007",
                "menuName":"天气预报",
                "menuUrl":"/weather-web/data/forecast",
                "orderNo":2,
                "parentId":"2c9280dc5a7a1513015a7dabab0f0003"
              }
            ],
            "id":"2c9280dc5a7a1513015a7dabab0f0003",
            "menuName":"数据管理",
            "menuUrl":"javascript:void(0)",
            "orderNo":5,
            "parentId":"2c92848f62ce22440162d3367f830003"
          },
          {
            "childList":[
              {
                "childList":null,
                "id":"2c92848f63aed7360163d2db98cb0003",
                "menuName":"通用配置",
                "menuUrl":"/weather-web/config/index",
                "orderNo":1,
                "parentId":"2c92848f63aed7360163d2dacd5e0002"
              },
              {
                "childList":null,
                "id":"2c92848f63aed7360163d2dc8d040004",
                "menuName":"APP版本配置",
                "menuUrl":"/weather-web/appversion/index",
                "orderNo":2,
                "parentId":"2c92848f63aed7360163d2dacd5e0002"
              },
              {
                "childList":null,
                "id":"2c92848f63d8205c0163de49fe660000",
                "menuName":"区域配置",
                "menuUrl":"/weather-web/domain/index",
                "orderNo":3,
                "parentId":"2c92848f63aed7360163d2dacd5e0002"
              },
              {
                "childList":null,
                "id":"610096fcce2f43679c8aa0ab6558aa6d",
                "menuName":"硬件BIN文件",
                "menuUrl":"/weather-web/upgrade/binindex",
                "orderNo":4,
                "parentId":"2c92848f63aed7360163d2dacd5e0002"
              },
              {
                "childList":null,
                "id":"8f3336942938470380597d2aca5a9c33",
                "menuName":"硬件升级",
                "menuUrl":"/weather-web/upgrade/specialindex",
                "orderNo":5,
                "parentId":"2c92848f63aed7360163d2dacd5e0002"
              }
            ],
            "id":"2c92848f63aed7360163d2dacd5e0002",
            "menuName":"系统配置",
            "menuUrl":"javascript:void(0)",
            "orderNo":6,
            "parentId":"2c92848f62ce22440162d3367f830003"
          },
          {
            "childList":[
              {
                "childList":[
                  {
                    "childList":null,
                    "id":"2c9280dc5ad2347e015ad4fd83c60006",
                    "menuName":"站点日历",
                    "menuUrl":"/weather-web/airCalendar/station_day_statics",
                    "orderNo":1,
                    "parentId":"2c92848f61543d3801616139ba150002"
                  },
                  {
                    "childList":null,
                    "id":"2c9280dc5ad2347e015ad4ff1b6e0007",
                    "menuName":"站点月历",
                    "menuUrl":"/weather-web/airCalendar/station_month_statics",
                    "orderNo":2,
                    "parentId":"2c92848f61543d3801616139ba150002"
                  }
                ],
                "id":"2c92848f61543d3801616139ba150002",
                "menuName":"大气日历",
                "menuUrl":"javascript:void(0)",
                "orderNo":2,
                "parentId":"2c92848f62ce22440162d6f935100004"
              },
              {
                "childList":[
                  {
                    "childList":null,
                    "id":"2c9280dc5ab22789015ab798ce350000",
                    "menuName":"全站分析",
                    "menuUrl":"/weather-web/stationAnalysis/weatherChart",
                    "orderNo":2,
                    "parentId":"2c9280dc5a7a1513015a7db4e6510006"
                  },
                  {
                    "childList":null,
                    "id":"402881f25f56aaa2015f56af00d80000",
                    "menuName":"重污染监测",
                    "menuUrl":"/weather-web/stationAnalysis/heavyPollution",
                    "orderNo":3,
                    "parentId":"2c9280dc5a7a1513015a7db4e6510006"
                  }
                ],
                "id":"2c9280dc5a7a1513015a7db4e6510006",
                "menuName":"大气分析",
                "menuUrl":"javascript:void(0)",
                "orderNo":3,
                "parentId":"2c92848f62ce22440162d6f935100004"
              },
              {
                "childList":[
                  {
                    "childList":null,
                    "id":"2c9280dc5a7a1513015a7dbee5d10012",
                    "menuName":"城市数据分析",
                    "menuUrl":"/weather-web/cityData/dataAnalysisPC",
                    "orderNo":1,
                    "parentId":"2c92848f63166130016324e913320001"
                  },
                  {
                    "childList":null,
                    "id":"2c9280dc5a7a1513015a7dbee6d10013",
                    "menuName":"城市对比分析",
                    "menuUrl":"/weather-web/cityData/comparativeAnalysis",
                    "orderNo":2,
                    "parentId":"2c92848f63166130016324e913320001"
                  }
                ],
                "id":"2c92848f63166130016324e913320001",
                "menuName":"城市数据",
                "menuUrl":"javascript:void(0)",
                "orderNo":4,
                "parentId":"2c92848f62ce22440162d6f935100004"
              },
              {
                "childList":[
                  {
                    "childList":null,
                    "id":"2c9280dc5ad2347e015ad508fd6b000c",
                    "menuName":"来源识别",
                    "menuUrl":"/weather-web/pollutionSource/index",
                    "orderNo":3,
                    "parentId":"2c9280dc5a7a1513015a7db5fc070008"
                  }
                ],
                "id":"2c9280dc5a7a1513015a7db5fc070008",
                "menuName":"监测监管",
                "menuUrl":"javascript:void(0)",
                "orderNo":5,
                "parentId":"2c92848f62ce22440162d6f935100004"
              },
              {
                "childList":[
                  {
                    "childList":null,
                    "id":"2c92825d5b5b71df015b5c7587720001",
                    "menuName":"实时监测",
                    "menuUrl":"/weather-web/airMonitoring/realtime",
                    "orderNo":1,
                    "parentId":"2c92825d5b5b71df015b5c71b08a0000"
                  },
                  {
                    "childList":null,
                    "id":"2c92825d5b5b71df015b5c773f2d0003",
                    "menuName":"城市数据分析",
                    "menuUrl":"/weather-web/cityData/dataAnalysis",
                    "orderNo":2,
                    "parentId":"2c92825d5b5b71df015b5c71b08a0000"
                  },
                  {
                    "childList":null,
                    "id":"2c92825d5b5b71df015b5c76622d0002",
                    "menuName":"污染云图",
                    "menuUrl":"/weather-web/airMonitoring/pollutionCloud",
                    "orderNo":3,
                    "parentId":"2c92825d5b5b71df015b5c71b08a0000"
                  }
                ],
                "id":"2c92825d5b5b71df015b5c71b08a0000",
                "menuName":"大屏管理",
                "menuUrl":"javascript:void(0)",
                "orderNo":7,
                "parentId":"2c92848f62ce22440162d6f935100004"
              }
            ],
            "id":"2c92848f62ce22440162d6f935100004",
            "menuName":"历史功能",
            "menuUrl":"javascript:void(0)",
            "orderNo":7,
            "parentId":"2c92848f62ce22440162d3367f830003"
          }
        ],
        "id":"2c92848f62ce22440162d3367f830003",
        "menuName":"设置",
        "menuUrl":"javascript:void(0)",
        "orderNo":9,
        "parentId":null
      },
      {
        "childList":null,
        "id":"2c9280dc5ab22789015ab7ad32db0003",
        "menuName":"实时监测",
        "menuUrl":"/weather-web/airMonitoring/realtimePC",
        "orderNo":11,
        "parentId":null
      }
    ]
  }
}

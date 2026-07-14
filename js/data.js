const provinceRankingData = {
      "First quarter": [
        { name: "广西壮族自治区", value: 10 }, { name: "湖南省", value: 9 },
        { name: "浙江省", value: 8 }, { name: "甘肃省", value: 7 }, 
        { name: "贵州省", value: 6 },{ name: "广东省", value: 5 }, 
        { name: "新疆维吾尔自治区", value: 4 },{ name: "辽宁省", value: 3 }, 
        { name: "云南省", value: 2 },{ name: "四川省", value: 1 },

        { name: "河南省", value: -10 }, { name: "陕西省", value: -9 },
        { name: "吉林省", value: -8 }, { name: "黑龙江省", value: -7 },
        { name: "天津市", value: -6 }, { name: "安徽省", value: -5 },
        { name: "河北省", value: -4 }, { name: "山东省", value: -3 },
        { name: "江苏省", value: -2 }, { name: "山西省", value: -1 }
      ],
      "Second quarter": [
        { name: "广西壮族自治区", value: 11 }, { name: "湖南省", value: 10 },
        { name: "浙江省", value: 9 }, { name: "甘肃省", value: 8 },
        { name: "贵州省", value: 7 }, { name: "新疆维吾尔自治区", value: 6 },
        { name: "辽宁省", value: 5 }, { name: "云南省", value: 4 },
        { name: "安徽省", value: 3 }, { name: "广东省", value: 2 },
        { name: "四川省", value: 1 },
        
        { name: "河南省", value: -10 },{ name: "吉林省", value: -9 }, 
        { name: "山东省", value: -8 },{ name: "陕西省", value: -7 }, 
        { name: "内蒙古自治区", value: -6 },{ name: "天津市", value: -5 }, 
        { name: "河北省", value: -4 },{ name: "山西省", value: -3 },
        { name: "黑龙江省", value: -2 },{ name: "江苏省", value: -1 }
      ],
      "Third quarter": [
        { name: "广西壮族自治区", value: 12 },{ name: "湖南省", value: 11 },
        { name: "甘肃省", value: 10 },{ name: "贵州省", value: 9 },
        { name: "浙江省", value: 8 },{ name: "新疆维吾尔自治区", value: 7 },
        { name: "云南省", value: 6 },{ name: "四川省", value: 5 },
        { name: "辽宁省", value: 4 },{ name: "福建省", value: 3 },
        { name: "安徽省", value: 2 },{ name: "广东省", value: 1 },

        { name: "河南省", value: -8 },{ name: "河北省", value: -7 },
        { name: "内蒙古自治区", value: -6 },{ name: "江苏省", value: -5 },
        { name: "山东省", value: -4 },{ name: "山西省", value: -3 },
        { name: "云南省", value: -2 },{ name: "黑龙江省", value: -1 }
      ],
      "Fourth quarter": [
        { name: "广西壮族自治区", value: 10 },{ name: "湖南省", value: 9 },
        { name: "浙江省", value: 8 },{ name: "贵州省", value: 7 },
        { name: "甘肃省", value: 6 },{ name: "新疆维吾尔自治区", value: 5 },
        { name: "云南省", value: 4 },{ name: "福建省", value: 3 },
        { name: "四川省", value: 2 },{ name: "广东省", value: 1 },

        { name: "河南省", value: -11 },{ name: "安徽省", value: -10 },
        { name: "河北省", value: -9 },{ name: "辽宁省", value: -8 },
        { name: "山东省", value: -7 },{ name: "江苏省", value: -6 },
        { name: "天津市", value: -5 },{ name: "吉林省", value: -4 },
        { name: "内蒙古自治区", value: -3 },{ name: "黑龙江省", value: -2 },
        { name: "山西省", value: -1 }
      ]
    };

const englishNames = {
                "北京市": "Beijing",
                "天津市": "Tianjin",
                "河北省": "Hebei Province",
                "山西省": "Shanxi Province",
                "内蒙古自治区": "Inner Mongolia Autonomous Region",
                "辽宁省": "Liaoning Province",
                "吉林省": "Jilin Province",
                "黑龙江省": "Heilongjiang Province",
                "上海市": "Shanghai",
                "江苏省": "Jiangsu Province",
                "浙江省": "Zhejiang Province",
                "安徽省": "Anhui Province",
                "福建省": "Fujian Province",
                "江西省": "Jiangxi Province",
                "山东省": "Shandong Province",
                "河南省": "Henan Province",
                "湖北省": "Hubei Province",
                "湖南省": "Hunan Province",
                "广东省": "Guangdong Province",
                "广西壮族自治区": "Guangxi Zhuang Autonomous Region",
                "海南省": "Hainan Province",
                "重庆市": "Chongqing",
                "四川省": "Sichuan Province",
                "贵州省": "Guizhou Province",
                "云南省": "Yunnan Province",
                "西藏自治区": "Tibet Autonomous Region",
                "陕西省": "Shaanxi Province",
                "甘肃省": "Gansu Province",
                "青海省": "Qinghai Province",
                "宁夏回族自治区": "Ningxia Hui Autonomous Region",
                "新疆维吾尔自治区": "Xinjiang Uygur Autonomous Region",
                "台湾省": "Taiwan",
                "香港特别行政区": "Hong Kong Special Administrative Region",
                "澳门特别行政区": "Macau Special Administrative Region",
                "南海诸岛" : "South China Sea Islands"
              };

let waterQualityData = {
              "First quarter": [89.9, 7.6, 1.8, 0.7],
              "Second quarter": [88.8, 8.9, 1.5, 0.8],
              "Third quarter": [88.5, 9.5, 1.4, 0.7],
              "Fourth quarter": [90.4, 7.8, 1.2, 0.6]
            };
            
let riverQualityData = {
              "First quarter": [[98.5, 0], [97.2, 0], [96.6, 0], [95.6, 0], [95.4, 1.5], [89.5, 2.3], [85.3, 0], [84.7, 0], [81.7, 0.4], [76.3, 2.2]],
              "Second quarter": [[98, 0], [97, 0], [96.9, 0.1], [95, 0], [94.7, 1.5], [89.6, 1.9], [85.3, 0], [81.8, 0.3], [77.7, 0], [73.5, 3.2]],
              "Third quarter": [[99, 0], [97.8, 0], [96.2, 0], [96.2, 0], [94.5, 0], [88.1, 1.5], [83, 1], [79.5, 0], [76, 0], [74.5, 2.7]],
              "Fourth quarter": [[99, 0], [98.6, 0], [97.2, 0], [97, 0], [95.9, 0], [90.4, 1.5], [88.1, 0.5], [86.5, 0], [81.3, 0], [76.9, 2]]
            };
            
let reservoirQualityData = {
              "First quarter": [[53, 51.5], [53.6, 52.3], [64.3, 55.3], [40.3, 36], [31.2, 29.3], [45, 44.7]],
              "Second quarter": [[52.3, 51.8], [53, 53.3], [64.4, 58.3], [39.8, 37.8], [31.5, 29.1], [46.4, 44.9]],
              "Third quarter": [[52.7, 52], [55, 56.4], [63.9, 60.8], [44.1, 39.7], [32.5, 30.7], [47.6, 46.1]],
              "Fourth quarter": [[52.6, 52.4], [54.8, 56.6], [63, 61.6], [43.7, 40.3], [32.8, 31.6], [47.3, 46.2]]
            };

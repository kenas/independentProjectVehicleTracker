// const numbers = "TAO 784230 M1279,TAO 784231 M1279,TAO 784232 M1279,TAO 797924 M1279,TAO 785253 M1280,TBO 784233 M1279,TBO 784234 M1279,TBO 784312 M1279,TBO 785258 M1280,TCO 784313 M1279,TCO 784314 M1279,TCO 784315 M1279,TCO 784316 M1279,TCO 784594 M1279,TCO 784600 M1279,TCO 784601 M1279,TCO 784606 M1279, TCO 784700 M1279, TCO 784701 M1279,TCO 784706 M1279, TCO 784708 M1279, TCO 784713 M1279, TCO 784714 M1279, TCO 784716 M1279, TCO 784720 M1279,TCO 785259 M1280, TCO 785260 M1280, TCO 785261 M1280, TCO 785262 M1280, TCO 785263 M1280, TCO 785264 M1280, TDO 784717 M1279, TDO 784718 M1279, TDO 784719 M1279, TDO 784721 M1279, TDO 784722 M1279, TDO 784723 M1279, TDO 784724 M1279, TDO 784729 M1279, TDO 784739 M1279, TDO 784801 M1279, TDO 784803 M1279, TDO 784804 M1279, TDO 785265 M1280, TDO 785266 M1280, TDO 785267 M1280, TDO 785268 M1280, TDO 785269 M1280,TDO 789874 M1280, TTO 784317 M1279, TTO 784725 M1279, TTO 784816 M1279, TTO 793444 M1279,TTO 798006 M1279,TTO 785270 M1280,TTO 785272 M1280, TTO 785273 M1280, TTO 785386 M1280, ZEO 784425 M1279, ZEO 784505 M1279, ZEO 784506 M1279, ZEO 784507 M1279, ZEO 784509 M1279, ZEO 784510 M1279, ZEO 784512 M1279, ZEO 784820 M1279, ZEO 784830 M1279, ZEO 790350 M1280, ZEO 790354 M1280, ZEO 790355 M1280, ZEO 790360 M1280, UAO 784805 M1279, UBO 784806 M1279, UCO 784807 M1279, UDO 785243 M1280, UDO 793896 M1280, UTO 790873 M1278, UTO 784808 M1279, UTO 784831 M1279, UTO 784832 M1279, UTO 784833 M1279, UTO 784834 M1279, UTO 784835 M1279, UTO 784836 M1279, UTO 784837 M1279, UTO 784838 M1279, UTO 793897 M1280, UTO 793914 M1280, UTO 794152 M1280, UTO 794153 M1280, ZDO 784412 M1279, ZDO 784413 M1279, ZDO 784414 M1279, ZDO 784415 M1279, ZDO 784417 M1279, ZDO 784418 M1279, ZDO 784419 M1279, ZDO 784420 M1279, ZDO 784421 M1279, ZDO 784422 M1279, ZDO 784423 M1279, ZDO 790342 M1280, ZDO 790343 M1280, ZDO 790346 M1280, ZDO 790347 M1280, VAO 780023 M1280, VAO 793928 M1280, VBO 785239 M1280, VBO 793927 M1280, VCO 792869 M1280, VCO 793943 M1280, VTO 790804 M1278, VTO 790835 M1278, VTO 790844 M1278, VTO 790851 M1278, VTO 790865 M1278, VTO 784709 M1279, VTO 784710 M1279,VTO 784711 M1279, VTO 784712 M1279,VTO 784715 M1279";

const vehicles = [
    {
        "sn": "TAO00001",
        "category": "TAO",
        "km": 156774,
        "fuelLevel": 59,
        "coolantLevel": 22,
        "gate": 1,
        "row": 1,
        "position": 1
    },
    {
        "sn": "BNO00002",
        "category": "BNO",
        "km": 105622,
        "fuelLevel": 69,
        "coolantLevel": 66,
        "gate": 1,
        "row": 1,
        "position": 2
    },
    {
        "sn": "LOP00003",
        "category": "LOP",
        "km": 25015,
        "fuelLevel": 55,
        "coolantLevel": 93,
        "gate": 1,
        "row": 1,
        "position": 3
    },
    {
        "sn": "HGB00004",
        "category": "HGB",
        "km": 121454,
        "fuelLevel": 97,
        "coolantLevel": 38,
        "gate": 1,
        "row": 1,
        "position": 4
    },
    {
        "sn": "LOP00005",
        "category": "LOP",
        "km": 70488,
        "fuelLevel": 70,
        "coolantLevel": 77,
        "gate": 1,
        "row": 1,
        "position": 5
    },
    {
        "sn": "LOP00006",
        "category": "LOP",
        "km": 25186,
        "fuelLevel": 53,
        "coolantLevel": "low",
        "gate": 1,
        "row": 2,
        "position": 1
    },
    {
        "sn": "HGB00007",
        "category": "HGB",
        "km": 170908,
        "fuelLevel": 80,
        "coolantLevel": 74,
        "gate": 1,
        "row": 2,
        "position": 2
    },
    {
        "sn": "HGB00008",
        "category": "HGB",
        "km": 186366,
        "fuelLevel": "low",
        "coolantLevel": 10,
        "gate": 1,
        "row": 2,
        "position": 3
    },
    {
        "sn": "TAO00009",
        "category": "TAO",
        "km": 97807,
        "fuelLevel": "low",
        "coolantLevel": 8,
        "gate": 1,
        "row": 2,
        "position": 4
    },
    {
        "sn": "LOP00010",
        "category": "LOP",
        "km": 92289,
        "fuelLevel": 90,
        "coolantLevel": 81,
        "gate": 1,
        "row": 2,
        "position": 5
    },
    {
        "sn": "LOP00011",
        "category": "LOP",
        "km": 29744,
        "fuelLevel": 19,
        "coolantLevel": 95,
        "gate": 1,
        "row": 3,
        "position": 1
    },
    {
        "sn": "HGB00012",
        "category": "HGB",
        "km": 185359,
        "fuelLevel": 78,
        "coolantLevel": 31,
        "gate": 1,
        "row": 3,
        "position": 2
    },
    {
        "sn": "BNO00013",
        "category": "BNO",
        "km": 106680,
        "fuelLevel": 60,
        "coolantLevel": 51,
        "gate": 1,
        "row": 3,
        "position": 3
    },
    {
        "sn": "TAO00014",
        "category": "TAO",
        "km": 65487,
        "fuelLevel": 68,
        "coolantLevel": 74,
        "gate": 1,
        "row": 3,
        "position": 4
    },
    {
        "sn": "BNO00015",
        "category": "BNO",
        "km": 40412,
        "fuelLevel": 49,
        "coolantLevel": 95,
        "gate": 1,
        "row": 3,
        "position": 5
    },
    {
        "sn": "HGB00016",
        "category": "HGB",
        "km": 122123,
        "fuelLevel": 58,
        "coolantLevel": 16,
        "gate": 1,
        "row": 4,
        "position": 1
    },
    {
        "sn": "TAO00017",
        "category": "TAO",
        "km": 32035,
        "fuelLevel": 2,
        "coolantLevel": 11,
        "gate": 1,
        "row": 4,
        "position": 2
    },
    {
        "sn": "HGB00018",
        "category": "HGB",
        "km": 56922,
        "fuelLevel": 77,
        "coolantLevel": 69,
        "gate": 1,
        "row": 4,
        "position": 3
    },
    {
        "sn": "DFG00019",
        "category": "DFG",
        "km": 154486,
        "fuelLevel": 99,
        "coolantLevel": 47,
        "gate": 1,
        "row": 4,
        "position": 4
    },
    {
        "sn": "TAK00020",
        "category": "TAK",
        "km": 109333,
        "fuelLevel": 1,
        "coolantLevel": 8,
        "gate": 1,
        "row": 4,
        "position": 5
    },
    {
        "sn": "BNO00021",
        "category": "BNO",
        "km": 97731,
        "fuelLevel": 5,
        "coolantLevel": 0,
        "gate": 2,
        "row": 1,
        "position": 1
    },
    {
        "sn": "DFG00022",
        "category": "DFG",
        "km": 105804,
        "fuelLevel": 89,
        "coolantLevel": 86,
        "gate": 2,
        "row": 1,
        "position": 2
    },
    {
        "sn": "TAO00023",
        "category": "TAO",
        "km": 159533,
        "fuelLevel": 26,
        "coolantLevel": 43,
        "gate": 2,
        "row": 1,
        "position": 3
    },
    {
        "sn": "DFG00024",
        "category": "DFG",
        "km": 93206,
        "fuelLevel": 46,
        "coolantLevel": 86,
        "gate": 2,
        "row": 1,
        "position": 4
    },
    {
        "sn": "DFG00025",
        "category": "DFG",
        "km": 51959,
        "fuelLevel": 37,
        "coolantLevel": 38,
        "gate": 2,
        "row": 1,
        "position": 5
    },
    {
        "sn": "BNO00026",
        "category": "BNO",
        "km": 38131,
        "fuelLevel": 23,
        "coolantLevel": 61,
        "gate": 2,
        "row": 2,
        "position": 1
    },
    {
        "sn": "DFG00027",
        "category": "DFG",
        "km": 136023,
        "fuelLevel": 23,
        "coolantLevel": 77,
        "gate": 2,
        "row": 2,
        "position": 2
    },
    {
        "sn": "DFG00028",
        "category": "DFG",
        "km": 35643,
        "fuelLevel": 40,
        "coolantLevel": 73,
        "gate": 2,
        "row": 2,
        "position": 3
    },
    {
        "sn": "TAO00029",
        "category": "TAO",
        "km": 89044,
        "fuelLevel": 88,
        "coolantLevel": 13,
        "gate": 2,
        "row": 2,
        "position": 4
    },
    {
        "sn": "TAO00030",
        "category": "TAO",
        "km": 122079,
        "fuelLevel": 91,
        "coolantLevel": 82,
        "gate": 2,
        "row": 2,
        "position": 5,
    },
    {
        "sn": "DFG00031",
        "category": "DFG",
        "km": 142694,
        "fuelLevel": 90,
        "coolantLevel": 15,
        "gate": 2,
        "row": 3,
        "position": 1
    },
    {
        "sn": "HGB00032",
        "category": "HGB",
        "km": 141948,
        "fuelLevel": 39,
        "coolantLevel": 34,
        "gate": 2,
        "row": 3,
        "position": 2
    },
    {
        "sn": "DFG00033",
        "category": "DFG",
        "km": 164307,
        "fuelLevel": 87,
        "coolantLevel": 98,
        "gate": 2,
        "row": 3,
        "position": 3
    },
    {
        "sn": "BNO00034",
        "category": "BNO",
        "km": 132967,
        "fuelLevel": 15,
        "coolantLevel": 65,
        "gate": 2,
        "row": 3,
        "position": 5
    },
    {
        "sn": "TAK00035",
        "category": "TAK",
        "km": 171610,
        "fuelLevel": 49,
        "coolantLevel": 96,
        "gate": 2,
        "row": 4,
        "position": 1
    },
    {
        "sn": "TAK00036",
        "category": "TAK",
        "km": 163443,
        "fuelLevel": 15,
        "coolantLevel": 1,
        "gate": 2,
        "row": 4,
        "position": 2
    },
    {
        "sn": "BNO00037",
        "category": "BNO",
        "km": 56534,
        "fuelLevel": 57,
        "coolantLevel": 48,
        "gate": 2,
        "row": 4,
        "position": 3
    },
    {
        "sn": "TAK00038",
        "category": "TAK",
        "km": 73317,
        "fuelLevel": 71,
        "coolantLevel": 51,
        "gate": 2,
        "row": 4,
        "position": 4
    },
    {
        "sn": "BNO00039",
        "category": "BNO",
        "km": 198127,
        "fuelLevel": 87,
        "coolantLevel": 50,
        "gate": 2,
        "row": 4,
        "position": 5
    },
    {
        "sn": "TAK00040",
        "category": "TAK",
        "km": 58576,
        "fuelLevel": 44,
        "coolantLevel": 78,
        "gate": 3,
        "row": 1,
        "position": 1
    },
    {
        "sn": "TAK00041",
        "category": "TAK",
        "km": 70967,
        "fuelLevel": 60,
        "coolantLevel": 39,
        "gate": 3,
        "row": 1,
        "position": 2
    },
    {
        "sn": "LOP00042",
        "category": "LOP",
        "km": 105152,
        "fuelLevel": 54,
        "coolantLevel": 84,
        "gate": 3,
        "row": 1,
        "position": 3
    },
    {
        "sn": "HGB00043",
        "category": "HGB",
        "km": 72899,
        "fuelLevel": 57,
        "coolantLevel": 23,
        "gate": 3,
        "row": 1,
        "position": 4
    },
    {
        "sn": "TAK00044",
        "category": "TAK",
        "km": 46390,
        "fuelLevel": 92,
        "coolantLevel": 31,
        "gate": 3,
        "row": 1,
        "position": 5
    },
    {
        "sn": "DFG00045",
        "category": "DFG",
        "km": 27547,
        "fuelLevel": 89,
        "coolantLevel": 36,
        "gate": 3,
        "row": 2,
        "position": 1
    },
    {
        "sn": "BNO00046",
        "category": "BNO",
        "km": 45035,
        "fuelLevel": 94,
        "coolantLevel": 22,
        "gate": 3,
        "row": 2,
        "position": 2
    },
    {
        "sn": "DFG00047",
        "category": "DFG",
        "km": 135083,
        "fuelLevel": 29,
        "coolantLevel": 96,
        "gate": 3,
        "row": 2,
        "position": 3
    },
    {
        "sn": "BNO00048",
        "category": "BNO",
        "km": 156432,
        "fuelLevel": 51,
        "coolantLevel": 52,
        "gate": 3,
        "row": 2,
        "position": 4
    },
    {
        "sn": "HGB00049",
        "category": "HGB",
        "km": 181102,
        "fuelLevel": 79,
        "coolantLevel": 98,
        "gate": 3,
        "row": 2,
        "position": 5
    },
    {
        "sn": "TAO00050",
        "category": "TAO",
        "km": 144558,
        "fuelLevel": 91,
        "coolantLevel": 77,
        "gate": 3,
        "row": 3,
        "position": 1
    },
    {
        "sn": "BNO00051",
        "category": "BNO",
        "km": 107911,
        "fuelLevel": 64,
        "coolantLevel": 43,
        "gate": 3,
        "row": 3,
        "position": 2
    },
    {
        "sn": "TAO00052",
        "category": "TAO",
        "km": 61555,
        "fuelLevel": 36,
        "coolantLevel": 27,
        "gate": 3,
        "row": 3,
        "position": 3
    },
    {
        "sn": "TAO00053",
        "category": "TAO",
        "km": 197830,
        "fuelLevel": 20,
        "coolantLevel": 67,
        "gate": 3,
        "row": 3,
        "position": 4
    },
    {
        "sn": "HGB00054",
        "category": "HGB",
        "km": 108291,
        "fuelLevel": 8,
        "coolantLevel": 66,
        "gate": 3,
        "row": 3,
        "position": 5
    },
    {
        "sn": "TAO00055",
        "category": "TAO",
        "km": 114910,
        "fuelLevel": 17,
        "coolantLevel": 74,
        "gate": 3,
        "row": 4,
        "position": 1
    },
    {
        "sn": "TAK00056",
        "category": "TAK",
        "km": 153109,
        "fuelLevel": 59,
        "coolantLevel": 83,
        "gate": 3,
        "row": 4,
        "position": 2
    },
    {
        "sn": "HGB00057",
        "category": "HGB",
        "km": 57546,
        "fuelLevel": 85,
        "coolantLevel": 72,
        "gate": 3,
        "row": 4,
        "position": 3
    },
    {
        "sn": "TAO00058",
        "category": "TAO",
        "km": 190184,
        "fuelLevel": 0,
        "coolantLevel": 33,
        "gate": 3,
        "row": 4,
        "position": 4
    },
    {
        "sn": "LOP00059",
        "category": "LOP",
        "km": 193607,
        "fuelLevel": 70,
        "coolantLevel": 1,
        "gate": 3,
        "row": 4,
        "position": 5
    },
    {
        "sn": "TAK00060",
        "category": "TAK",
        "km": 95013,
        "fuelLevel": 74,
        "coolantLevel": 50,
        "gate": 4,
        "row": 1,
        "position": 1
    }
]
export default vehicles;


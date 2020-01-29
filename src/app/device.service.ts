import { Injectable } from '@angular/core';
import * as uuid from '../../node_modules/uuid';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
sensors = [
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 1,
    deviceId: 'A81758FFFE030FDA',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862834,
    longitude: 0.00035 + 25.46546437
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 2,
    deviceId: 'A81758FFFE030F5A',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864615,
    longitude: 0.00035 + 25.46546437
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 3,
    deviceId: 'A81758FFFE030F5D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862834,
    longitude: 0.00035 + 25.4655046
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 4,
    deviceId: 'A81758FFFE03107C',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864644,
    longitude: 0.00035 + 25.4655046
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 5,
    deviceId: 'A81758FFFE030FFF',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862862,
    longitude: 0.00035 + 25.46554819
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 6,
    deviceId: 'A81758FFFE03102E',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864644,
    longitude: 0.00035 + 25.46554752
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 7,
    deviceId: 'A81758FFFE030F58',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05868008,
    longitude: 0.00035 + 25.46554886
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 8,
    deviceId: 'A81758FFFE030F6D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05889753,
    longitude: 0.00035 + 25.46499968
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 9,
    deviceId: 'A81758FFFE030F67',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05889188,
    longitude: 0.00035 + 25.46504259
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 10,
    deviceId: 'A81758FFFE030F6C',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05890997,
    longitude: 0.00035 + 25.46504259
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 11,
    deviceId: 'A81758FFFE030F61',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05889018,
    longitude: 0.00035 + 25.4650902
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 12,
    deviceId: 'A81758FFFE030F49',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05890969,
    longitude: 0.00035 + 25.46509221
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 13,
    deviceId: 'A81758FFFE030F63',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05889046,
    longitude: 0.00035 + 25.46513245
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 14,
    deviceId: 'A81758FFFE030F48',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05890969,
    longitude: 0.00035 + 25.46513446
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 15,
    deviceId: 'A81758FFFE030F64',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05889074,
    longitude: 0.00035 + 25.46517469
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 16,
    deviceId: 'A81758FFFE030F47',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05891223,
    longitude: 0.00035 + 25.46517737
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 17,
    deviceId: 'A81758FFFE030F65',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05889159,
    longitude: 0.00035 + 25.46521492
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 18,
    deviceId: 'A81758FFFE030F46',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05891223,
    longitude: 0.00035 + 25.46521828
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 19,
    deviceId: 'A81758FFFE030F66',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05889159,
    longitude: 0.00035 + 25.46526186
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 20,
    deviceId: 'A81758FFFE030F45',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05891252,
    longitude: 0.00035 + 25.46526186
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 21,
    deviceId: 'A81758FFFE030F44',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05889272,
    longitude: 0.00035 + 25.46529539
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 22,
    deviceId: 'A81758FFFE030F43',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05891337,
    longitude: 0.00035 + 25.4652974
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 23,
    deviceId: 'A81758FFFE030F55',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05861279,
    longitude: 0.00035 + 25.46566889
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 24,
    deviceId: 'A81758FFFE030F54',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862806,
    longitude: 0.00035 + 25.46567157
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 25,
    deviceId: 'A81758FFFE030F53',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864587,
    longitude: 0.00035 + 25.46567157
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 26,
    deviceId: 'A81758FFFE030F51',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862777,
    longitude: 0.00035 + 25.46571381
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 27,
    deviceId: 'A81758FFFE030F50',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864644,
    longitude: 0.00035 + 25.46571381
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 28,
    deviceId: 'A81758FFFE030F5B',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862834,
    longitude: 0.00035 + 25.46576142
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 29,
    deviceId: 'A81758FFFE030F4F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864502,
    longitude: 0.00035 + 25.46576008
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 30,
    deviceId: 'A81758FFFE030F4E',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05861109,
    longitude: 0.00035 + 25.46580099
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 31,
    deviceId: 'A81758FFFE030F4D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862693,
    longitude: 0.00035 + 25.46580099
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 32,
    deviceId: 'A81758FFFE030F4C',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864446,
    longitude: 0.00035 + 25.46580032
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 33,
    deviceId: 'A81758FFFE030F4B',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862721,
    longitude: 0.00035 + 25.46585128
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 34,
    deviceId: 'A81758FFFE031079',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05863654,
    longitude: 0.00035 + 25.46588749
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 35,
    deviceId: 'A81758FFFE031071',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0586289,
    longitude: 0.00035 + 25.46593308
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 36,
    deviceId: 'A81758FFFE031070',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864644,
    longitude: 0.00035 + 25.46593308
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 37,
    deviceId: 'A81758FFFE031009',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862862,
    longitude: 0.00035 + 25.46596929
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 38,
    deviceId: 'A81758FFFE031008',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864644,
    longitude: 0.00035 + 25.46596929
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 39,
    deviceId: 'A81758FFFE031007',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862806,
    longitude: 0.00035 + 25.46600752
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 40,
    deviceId: 'A81758FFFE031006',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864587,
    longitude: 0.00035 + 25.46600819
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 41,
    deviceId: 'A81758FFFE031005',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862749,
    longitude: 0.00035 + 25.4660444
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 42,
    deviceId: 'A81758FFFE031004',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864672,
    longitude: 0.00035 + 25.46604306
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 43,
    deviceId: 'A81758FFFE031003',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862862,
    longitude: 0.00035 + 25.46608195
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 44,
    deviceId: 'A81758FFFE031002',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864615,
    longitude: 0.00035 + 25.46608195
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 45,
    deviceId: 'A81758FFFE03103A',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0586289,
    longitude: 0.00035 + 25.46490647
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 46,
    deviceId: 'A81758FFFE03103B',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864955,
    longitude: 0.00035 + 25.46490647
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 47,
    deviceId: 'A81758FFFE031040',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0586733,
    longitude: 0.00035 + 25.46490781
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 48,
    deviceId: 'A81758FFFE031041',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869366,
    longitude: 0.00035 + 25.46490781
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 49,
    deviceId: 'A81758FFFE031042',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871204,
    longitude: 0.00035 + 25.46490647
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 50,
    deviceId: 'A81758FFFE030F5F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05873013,
    longitude: 0.00035 + 25.4649058
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 51,
    deviceId: 'A81758FFFE030F5E',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875162,
    longitude: 0.00035 + 25.46490647
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 52,
    deviceId: 'A81758FFFE03104A',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0587717,
    longitude: 0.00035 + 25.46490647
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 53,
    deviceId: 'A81758FFFE031039',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862749,
    longitude: 0.00035 + 25.4649514
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 54,
    deviceId: 'A81758FFFE03103C',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864813,
    longitude: 0.00035 + 25.46494938
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 55,
    deviceId: 'A81758FFFE031043',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05867132,
    longitude: 0.00035 + 25.46495207
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 56,
    deviceId: 'A81758FFFE031044',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869196,
    longitude: 0.00035 + 25.46495207
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 57,
    deviceId: 'A81758FFFE031045',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871034,
    longitude: 0.00035 + 25.46495005
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 58,
    deviceId: 'A81758FFFE031046',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05872872,
    longitude: 0.00035 + 25.46495005
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 59,
    deviceId: 'A81758FFFE031048',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05874993,
    longitude: 0.00035 + 25.46495005
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 60,
    deviceId: 'A81758FFFE031049',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05876944,
    longitude: 0.00035 + 25.46495073
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 61,
    deviceId: 'A81758FFFE030F75',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05878951,
    longitude: 0.00035 + 25.46495207
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 62,
    deviceId: 'A81758FFFE030F74',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880818,
    longitude: 0.00035 + 25.46495408
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 63,
    deviceId: 'A81758FFFE030F73',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882656,
    longitude: 0.00035 + 25.46495341
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 64,
    deviceId: 'A81758FFFE030F70',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884437,
    longitude: 0.00035 + 25.46495408
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 65,
    deviceId: 'A81758FFFE030F71',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886332,
    longitude: 0.00035 + 25.46495207
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 66,
    deviceId: 'A81758FFFE031038',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862834,
    longitude: 0.00035 + 25.46499968
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 67,
    deviceId: 'A81758FFFE03103D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864842,
    longitude: 0.00035 + 25.46499901
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 68,
    deviceId: 'A81758FFFE03106D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0586716,
    longitude: 0.00035 + 25.46500102
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 69,
    deviceId: 'A81758FFFE03106C',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869224,
    longitude: 0.00035 + 25.46500035
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 70,
    deviceId: 'A81758FFFE03106F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871091,
    longitude: 0.00035 + 25.46499901
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 71,
    deviceId: 'A81758FFFE031000',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05872872,
    longitude: 0.00035 + 25.46499901
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 72,
    deviceId: 'A81758FFFE03104B',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875078,
    longitude: 0.00035 + 25.46500102
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 73,
    deviceId: 'A81758FFFE03104C',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05876746,
    longitude: 0.00035 + 25.46500035
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 74,
    deviceId: 'A81758FFFE030F76',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879093,
    longitude: 0.00035 + 25.46500035
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 75,
    deviceId: 'A81758FFFE030F77',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880846,
    longitude: 0.00035 + 25.46500303
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 76,
    deviceId: 'A81758FFFE030F78',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882797,
    longitude: 0.00035 + 25.46500236
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 77,
    deviceId: 'A81758FFFE030F7A',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884465,
    longitude: 0.00035 + 25.4650037
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 78,
    deviceId: 'A81758FFFE031037',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862862,
    longitude: 0.00035 + 25.46504527
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 79,
    deviceId: 'A81758FFFE03103E',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864898,
    longitude: 0.00035 + 25.46504527
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 80,
    deviceId: 'A81758FFFE031069',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05867273,
    longitude: 0.00035 + 25.46504728
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 81,
    deviceId: 'A81758FFFE03106A',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869253,
    longitude: 0.00035 + 25.4650446
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 82,
    deviceId: 'A81758FFFE03106B',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871147,
    longitude: 0.00035 + 25.46504527
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 83,
    deviceId: 'A81758FFFE03104E',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05872985,
    longitude: 0.00035 + 25.46504594
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 84,
    deviceId: 'A81758FFFE03104D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875134,
    longitude: 0.00035 + 25.46504594
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 85,
    deviceId: 'A81758FFFE030F85',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877114,
    longitude: 0.00035 + 25.4650493
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 86,
    deviceId: 'A81758FFFE030F83',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879093,
    longitude: 0.00035 + 25.46504728
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 87,
    deviceId: 'A81758FFFE030F82',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880874,
    longitude: 0.00035 + 25.46504863
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 88,
    deviceId: 'A81758FFFE030F7E',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882797,
    longitude: 0.00035 + 25.4650493
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 89,
    deviceId: 'A81758FFFE030F7D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884465,
    longitude: 0.00035 + 25.46504863
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 90,
    deviceId: 'A81758FFFE030F7B',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886416,
    longitude: 0.00035 + 25.46504728
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 91,
    deviceId: 'A81758FFFE031036',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862919,
    longitude: 0.00035 + 25.46508819
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 92,
    deviceId: 'A81758FFFE03106E',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864785,
    longitude: 0.00035 + 25.46508886
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 93,
    deviceId: 'A81758FFFE031068',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05867302,
    longitude: 0.00035 + 25.46508953
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 94,
    deviceId: 'A81758FFFE031052',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869309,
    longitude: 0.00035 + 25.46508886
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 95,
    deviceId: 'A81758FFFE031099',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871175,
    longitude: 0.00035 + 25.46508953
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 96,
    deviceId: 'A81758FFFE03104F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05872985,
    longitude: 0.00035 + 25.46508752
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 97,
    deviceId: 'A81758FFFE030F87',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877057,
    longitude: 0.00035 + 25.46509087
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 98,
    deviceId: 'A81758FFFE030F88',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879065,
    longitude: 0.00035 + 25.46509087
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 99,
    deviceId: 'A81758FFFE030F89',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880874,
    longitude: 0.00035 + 25.46509422
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 100,
    deviceId: 'A81758FFFE030F8A',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882797,
    longitude: 0.00035 + 25.46509288
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 101,
    deviceId: 'A81758FFFE030F8B',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0588455,
    longitude: 0.00035 + 25.46509221
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 102,
    deviceId: 'A81758FFFE030F8C',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886473,
    longitude: 0.00035 + 25.46508953
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 103,
    deviceId: 'A81758FFFE031035',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05863004,
    longitude: 0.00035 + 25.46512708
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 104,
    deviceId: 'A81758FFFE031055',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864926,
    longitude: 0.00035 + 25.46512775
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 105,
    deviceId: 'A81758FFFE031054',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05867415,
    longitude: 0.00035 + 25.46512708
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 106,
    deviceId: 'A81758FFFE031053',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869422,
    longitude: 0.00035 + 25.46512708
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 107,
    deviceId: 'A81758FFFE031098',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871289,
    longitude: 0.00035 + 25.46512708
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 108,
    deviceId: 'A81758FFFE031050',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05872985,
    longitude: 0.00035 + 25.46512842
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 109,
    deviceId: 'A81758FFFE030F94',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875615,
    longitude: 0.00035 + 25.46512708
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 110,
    deviceId: 'A81758FFFE030F93',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877227,
    longitude: 0.00035 + 25.46512574
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 111,
    deviceId: 'A81758FFFE030F92',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879263,
    longitude: 0.00035 + 25.46512775
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 112,
    deviceId: 'A81758FFFE030F91',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880846,
    longitude: 0.00035 + 25.46512976
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 113,
    deviceId: 'A81758FFFE030F8F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882712,
    longitude: 0.00035 + 25.46512842
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 114,
    deviceId: 'A81758FFFE030F8E',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884635,
    longitude: 0.00035 + 25.46512574
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 115,
    deviceId: 'A81758FFFE030F8D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0588653,
    longitude: 0.00035 + 25.46512641
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 116,
    deviceId: 'A81758FFFE031034',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862975,
    longitude: 0.00035 + 25.46517134
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 117,
    deviceId: 'A81758FFFE031057',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05867415,
    longitude: 0.00035 + 25.46517134
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 118,
    deviceId: 'A81758FFFE031001',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869451,
    longitude: 0.00035 + 25.46517201
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 119,
    deviceId: 'A81758FFFE031097',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871317,
    longitude: 0.00035 + 25.46517
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 120,
    deviceId: 'A81758FFFE031051',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05873098,
    longitude: 0.00035 + 25.46516933
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 121,
    deviceId: 'A81758FFFE030F95',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0587536,
    longitude: 0.00035 + 25.46517067
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 122,
    deviceId: 'A81758FFFE030F96',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877227,
    longitude: 0.00035 + 25.46517
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 123,
    deviceId: 'A81758FFFE030F97',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879234,
    longitude: 0.00035 + 25.46517201
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 124,
    deviceId: 'A81758FFFE030F99',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880592,
    longitude: 0.00035 + 25.46517
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 125,
    deviceId: 'A81758FFFE031033',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862919,
    longitude: 0.00035 + 25.4652109
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 126,
    deviceId: 'A81758FFFE03105B',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0586487,
    longitude: 0.00035 + 25.4652109
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 127,
    deviceId: 'A81758FFFE031059',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05867415,
    longitude: 0.00035 + 25.46521224
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 128,
    deviceId: 'A81758FFFE03105A',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869366,
    longitude: 0.00035 + 25.46521224
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 129,
    deviceId: 'A81758FFFE031096',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0587126,
    longitude: 0.00035 + 25.4652109
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 130,
    deviceId: 'A81758FFFE030F9E',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875276,
    longitude: 0.00035 + 25.46521157
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 131,
    deviceId: 'A81758FFFE030F9D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877198,
    longitude: 0.00035 + 25.4652109
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 132,
    deviceId: 'A81758FFFE030F9C',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879206,
    longitude: 0.00035 + 25.46521358
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 133,
    deviceId: 'A81758FFFE031032',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862947,
    longitude: 0.00035 + 25.46525046
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 134,
    deviceId: 'A81758FFFE03105D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05867443,
    longitude: 0.00035 + 25.46524979
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 135,
    deviceId: 'A81758FFFE03105C',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869422,
    longitude: 0.00035 + 25.46524979
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 136,
    deviceId: 'A81758FFFE031094',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871317,
    longitude: 0.00035 + 25.46524912
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 137,
    deviceId: 'A81758FFFE030F69',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875332,
    longitude: 0.00035 + 25.46524845
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 138,
    deviceId: 'A81758FFFE030F68',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877283,
    longitude: 0.00035 + 25.46524845
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 139,
    deviceId: 'A81758FFFE030F9F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879036,
    longitude: 0.00035 + 25.46524778
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 140,
    deviceId: 'A81758FFFE031031',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862862,
    longitude: 0.00035 + 25.46528935
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 141,
    deviceId: 'A81758FFFE03105F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05867302,
    longitude: 0.00035 + 25.46528935
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 142,
    deviceId: 'A81758FFFE03105E',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869309,
    longitude: 0.00035 + 25.46528935
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 143,
    deviceId: 'A81758FFFE031093',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871147,
    longitude: 0.00035 + 25.46528935
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 144,
    deviceId: 'A81758FFFE030FA0',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05873013,
    longitude: 0.00035 + 25.46528868
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 145,
    deviceId: 'A81758FFFE030F6F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875162,
    longitude: 0.00035 + 25.46528801
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 146,
    deviceId: 'A81758FFFE030F6A',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877057,
    longitude: 0.00035 + 25.46528868
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 147,
    deviceId: 'A81758FFFE030FBF',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884974,
    longitude: 0.00035 + 25.4652907
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 148,
    deviceId: 'A81758FFFE031030',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862721,
    longitude: 0.00035 + 25.46533562
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 149,
    deviceId: 'A81758FFFE031065',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.058647,
    longitude: 0.00035 + 25.46533495
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 150,
    deviceId: 'A81758FFFE031066',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05867132,
    longitude: 0.00035 + 25.46533629
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 151,
    deviceId: 'A81758FFFE031067',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0586914,
    longitude: 0.00035 + 25.46533629
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 152,
    deviceId: 'A81758FFFE031092',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871006,
    longitude: 0.00035 + 25.46533428
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 153,
    deviceId: 'A81758FFFE030FA1',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05876944,
    longitude: 0.00035 + 25.46533562
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 154,
    deviceId: 'A81758FFFE030F9B',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884918,
    longitude: 0.00035 + 25.46533562
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 155,
    deviceId: 'A81758FFFE03102F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05862721,
    longitude: 0.00035 + 25.46537854
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 156,
    deviceId: 'A81758FFFE031064',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05864615,
    longitude: 0.00035 + 25.46538256
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 157,
    deviceId: 'A81758FFFE031063',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05867047,
    longitude: 0.00035 + 25.46537921
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 158,
    deviceId: 'A81758FFFE031062',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0586897,
    longitude: 0.00035 + 25.46538457
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 159,
    deviceId: 'A81758FFFE031091',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871402,
    longitude: 0.00035 + 25.46537854
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 160,
    deviceId: 'A81758FFFE031060',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05873268,
    longitude: 0.00035 + 25.46537854
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 161,
    deviceId: 'A81758FFFE031061',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0587536,
    longitude: 0.00035 + 25.46537854
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 162,
    deviceId: 'A81758FFFE030FA6',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879319,
    longitude: 0.00035 + 25.46537988
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 163,
    deviceId: 'A81758FFFE030FA5',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05881157,
    longitude: 0.00035 + 25.46538323
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 164,
    deviceId: 'A81758FFFE030FA4',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0588308,
    longitude: 0.00035 + 25.46538323
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 165,
    deviceId: 'A81758FFFE030FA2',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884833,
    longitude: 0.00035 + 25.46538189
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 166,
    deviceId: 'A81758FFFE031090',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871487,
    longitude: 0.00035 + 25.46542548
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 167,
    deviceId: 'A81758FFFE03102D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05873324,
    longitude: 0.00035 + 25.46542481
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 168,
    deviceId: 'A81758FFFE03102C',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875445,
    longitude: 0.00035 + 25.46542548
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 169,
    deviceId: 'A81758FFFE03102B',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877368,
    longitude: 0.00035 + 25.46542414
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 170,
    deviceId: 'A81758FFFE03102A',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879432,
    longitude: 0.00035 + 25.46542749
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 171,
    deviceId: 'A81758FFFE031029',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05881214,
    longitude: 0.00035 + 25.46542883
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 172,
    deviceId: 'A81758FFFE031028',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05883136,
    longitude: 0.00035 + 25.46542883
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 173,
    deviceId: 'A81758FFFE031027',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884974,
    longitude: 0.00035 + 25.4654295
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 174,
    deviceId: 'A81758FFFE031024',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886416,
    longitude: 0.00035 + 25.46542682
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 175,
    deviceId: 'A81758FFFE03108F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0587143,
    longitude: 0.00035 + 25.46546303
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 176,
    deviceId: 'A81758FFFE031023',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05873296,
    longitude: 0.00035 + 25.4654637
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 177,
    deviceId: 'A81758FFFE031022',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875417,
    longitude: 0.00035 + 25.4654637
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 178,
    deviceId: 'A81758FFFE031021',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0587734,
    longitude: 0.00035 + 25.4654637
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 179,
    deviceId: 'A81758FFFE031020',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879376,
    longitude: 0.00035 + 25.46546504
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 180,
    deviceId: 'A81758FFFE03101F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05881157,
    longitude: 0.00035 + 25.46546705
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 181,
    deviceId: 'A81758FFFE03101E',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0588308,
    longitude: 0.00035 + 25.46546705
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 182,
    deviceId: 'A81758FFFE03101D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05885342,
    longitude: 0.00035 + 25.46546973
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 183,
    deviceId: 'A81758FFFE03108E',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871204,
    longitude: 0.00035 + 25.4655046
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 184,
    deviceId: 'A81758FFFE03101C',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05873013,
    longitude: 0.00035 + 25.46550527
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 185,
    deviceId: 'A81758FFFE03101B',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875162,
    longitude: 0.00035 + 25.46550527
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 186,
    deviceId: 'A81758FFFE03101A',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877114,
    longitude: 0.00035 + 25.46550594
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 187,
    deviceId: 'A81758FFFE031019',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879149,
    longitude: 0.00035 + 25.46550661
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 188,
    deviceId: 'A81758FFFE031018',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880903,
    longitude: 0.00035 + 25.46550862
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 189,
    deviceId: 'A81758FFFE031017',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882825,
    longitude: 0.00035 + 25.46550728
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 190,
    deviceId: 'A81758FFFE031016',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05885229,
    longitude: 0.00035 + 25.46551064
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 191,
    deviceId: 'A81758FFFE03108D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871119,
    longitude: 0.00035 + 25.46554685
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 192,
    deviceId: 'A81758FFFE030F59',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05872985,
    longitude: 0.00035 + 25.46554752
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 193,
    deviceId: 'A81758FFFE031015',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05867415,
    longitude: 0.00035 + 25.46558574
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 194,
    deviceId: 'A81758FFFE031014',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869422,
    longitude: 0.00035 + 25.46558708
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 195,
    deviceId: 'A81758FFFE03108C',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871289,
    longitude: 0.00035 + 25.46558507
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 196,
    deviceId: 'A81758FFFE031013',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05873183,
    longitude: 0.00035 + 25.46558507
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 197,
    deviceId: 'A81758FFFE031012',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875276,
    longitude: 0.00035 + 25.46558641
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 198,
    deviceId: 'A81758FFFE031011',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877255,
    longitude: 0.00035 + 25.46558574
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 199,
    deviceId: 'A81758FFFE031010',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879206,
    longitude: 0.00035 + 25.46558708
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 200,
    deviceId: 'A81758FFFE03100F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05881044,
    longitude: 0.00035 + 25.46558909
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 201,
    deviceId: 'A81758FFFE03100E',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882938,
    longitude: 0.00035 + 25.46558909
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 202,
    deviceId: 'A81758FFFE03100D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0588455,
    longitude: 0.00035 + 25.4655911
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 203,
    deviceId: 'A81758FFFE03100C',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886558,
    longitude: 0.00035 + 25.46558842
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 204,
    deviceId: 'A81758FFFE03100B',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05867415,
    longitude: 0.00035 + 25.46562731
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 205,
    deviceId: 'A81758FFFE03100A',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869337,
    longitude: 0.00035 + 25.46562731
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 206,
    deviceId: 'A81758FFFE03108B',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871204,
    longitude: 0.00035 + 25.46562664
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 207,
    deviceId: 'A81758FFFE030FFE',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05873098,
    longitude: 0.00035 + 25.46562664
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 208,
    deviceId: 'A81758FFFE030FFD',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875134,
    longitude: 0.00035 + 25.46562731
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 209,
    deviceId: 'A81758FFFE030FFB',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877029,
    longitude: 0.00035 + 25.46562597
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 210,
    deviceId: 'A81758FFFE030FF8',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879093,
    longitude: 0.00035 + 25.46562798
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 211,
    deviceId: 'A81758FFFE030FFA',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880903,
    longitude: 0.00035 + 25.46562999
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 212,
    deviceId: 'A81758FFFE030FF7',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882797,
    longitude: 0.00035 + 25.46563067
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 213,
    deviceId: 'A81758FFFE030FF6',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884578,
    longitude: 0.00035 + 25.46563134
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 214,
    deviceId: 'A81758FFFE030FF5',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886501,
    longitude: 0.00035 + 25.46562932
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 215,
    deviceId: 'A81758FFFE030FF4',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05867217,
    longitude: 0.00035 + 25.4656709
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 216,
    deviceId: 'A81758FFFE030FF3',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869253,
    longitude: 0.00035 + 25.46567224
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 217,
    deviceId: 'A81758FFFE03108A',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871091,
    longitude: 0.00035 + 25.4656709
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 218,
    deviceId: 'A81758FFFE030FF2',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05872957,
    longitude: 0.00035 + 25.46567157
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 219,
    deviceId: 'A81758FFFE030D4F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875078,
    longitude: 0.00035 + 25.46567157
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 220,
    deviceId: 'A81758FFFE030FF1',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877,
    longitude: 0.00035 + 25.46567023
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 221,
    deviceId: 'A81758FFFE030FF0',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879036,
    longitude: 0.00035 + 25.46567157
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 222,
    deviceId: 'A81758FFFE030FEF',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880846,
    longitude: 0.00035 + 25.46567358
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 223,
    deviceId: 'A81758FFFE030FEE',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882741,
    longitude: 0.00035 + 25.46567358
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 224,
    deviceId: 'A81758FFFE030FED',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884494,
    longitude: 0.00035 + 25.46567358
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 225,
    deviceId: 'A81758FFFE030FEC',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886473,
    longitude: 0.00035 + 25.46567224
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 226,
    deviceId: 'A81758FFFE030FEB',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05867245,
    longitude: 0.00035 + 25.46571314
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 227,
    deviceId: 'A81758FFFE030FEA',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869196,
    longitude: 0.00035 + 25.46571381
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 228,
    deviceId: 'A81758FFFE031089',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871091,
    longitude: 0.00035 + 25.46571314
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 229,
    deviceId: 'A81758FFFE030FE9',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05872929,
    longitude: 0.00035 + 25.46571314
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 230,
    deviceId: 'A81758FFFE030FE8',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875134,
    longitude: 0.00035 + 25.46571314
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 231,
    deviceId: 'A81758FFFE030FE7',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877,
    longitude: 0.00035 + 25.46571314
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 232,
    deviceId: 'A81758FFFE030FE6',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879065,
    longitude: 0.00035 + 25.46571516
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 233,
    deviceId: 'A81758FFFE030FE5',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880874,
    longitude: 0.00035 + 25.46571583
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 234,
    deviceId: 'A81758FFFE030FE3',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882741,
    longitude: 0.00035 + 25.46571717
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 235,
    deviceId: 'A81758FFFE030FE2',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884635,
    longitude: 0.00035 + 25.4657165
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 236,
    deviceId: 'A81758FFFE030FE0',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05867217,
    longitude: 0.00035 + 25.46576008
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 237,
    deviceId: 'A81758FFFE031088',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05870949,
    longitude: 0.00035 + 25.4657574
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 238,
    deviceId: 'A81758FFFE030FDF',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05872815,
    longitude: 0.00035 + 25.46575606
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 239,
    deviceId: 'A81758FFFE030D4E',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05874936,
    longitude: 0.00035 + 25.46575807
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 240,
    deviceId: 'A81758FFFE030FDE',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05876887,
    longitude: 0.00035 + 25.4657574
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 241,
    deviceId: 'A81758FFFE030FDD',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05878923,
    longitude: 0.00035 + 25.46575941
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 242,
    deviceId: 'A81758FFFE030FDC',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880733,
    longitude: 0.00035 + 25.46575941
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 243,
    deviceId: 'A81758FFFE030FDB',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882627,
    longitude: 0.00035 + 25.46575941
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 244,
    deviceId: 'A81758FFFE030FE1',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884607,
    longitude: 0.00035 + 25.46576276
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 245,
    deviceId: 'A81758FFFE030FD9',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0586716,
    longitude: 0.00035 + 25.46580099
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 246,
    deviceId: 'A81758FFFE030FD8',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869111,
    longitude: 0.00035 + 25.46580166
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 247,
    deviceId: 'A81758FFFE031087',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871006,
    longitude: 0.00035 + 25.46580099
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 248,
    deviceId: 'A81758FFFE030FD7',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.058729,
    longitude: 0.00035 + 25.46579964
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 249,
    deviceId: 'A81758FFFE030FD6',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05874965,
    longitude: 0.00035 + 25.46579964
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 250,
    deviceId: 'A81758FFFE030FD5',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05876887,
    longitude: 0.00035 + 25.46580099
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 251,
    deviceId: 'A81758FFFE030FD4',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0587898,
    longitude: 0.00035 + 25.46580367
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 252,
    deviceId: 'A81758FFFE030FD3',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880733,
    longitude: 0.00035 + 25.46580434
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 253,
    deviceId: 'A81758FFFE030FD2',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882684,
    longitude: 0.00035 + 25.46580367
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 254,
    deviceId: 'A81758FFFE030FD1',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0588472,
    longitude: 0.00035 + 25.46580166
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 255,
    deviceId: 'A81758FFFE030FD0',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886275,
    longitude: 0.00035 + 25.46580367
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 256,
    deviceId: 'A81758FFFE031078',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871175,
    longitude: 0.00035 + 25.46584859
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 257,
    deviceId: 'A81758FFFE031077',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05873013,
    longitude: 0.00035 + 25.46584994
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 258,
    deviceId: 'A81758FFFE031076',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875191,
    longitude: 0.00035 + 25.46584927
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 259,
    deviceId: 'A81758FFFE031075',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877057,
    longitude: 0.00035 + 25.46584994
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 260,
    deviceId: 'A81758FFFE031074',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879121,
    longitude: 0.00035 + 25.46585128
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 261,
    deviceId: 'A81758FFFE031073',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880903,
    longitude: 0.00035 + 25.46585329
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 262,
    deviceId: 'A81758FFFE031072',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882854,
    longitude: 0.00035 + 25.46585329
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 263,
    deviceId: 'A81758FFFE030D52',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0588455,
    longitude: 0.00035 + 25.46585262
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 264,
    deviceId: 'A81758FFFE030D49',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886501,
    longitude: 0.00035 + 25.46585262
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 265,
    deviceId: 'A81758FFFE031083',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871232,
    longitude: 0.00035 + 25.46589352
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 266,
    deviceId: 'A81758FFFE031080',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05873098,
    longitude: 0.00035 + 25.46589419
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 267,
    deviceId: 'A81758FFFE03107F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875276,
    longitude: 0.00035 + 25.46589419
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 268,
    deviceId: 'A81758FFFE03107E',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877198,
    longitude: 0.00035 + 25.46589419
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 269,
    deviceId: 'A81758FFFE03107D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879234,
    longitude: 0.00035 + 25.46589553
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 270,
    deviceId: 'A81758FFFE03107B',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05881016,
    longitude: 0.00035 + 25.46589687
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 271,
    deviceId: 'A81758FFFE03107A',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882938,
    longitude: 0.00035 + 25.46589687
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 272,
    deviceId: 'A81758FFFE030D51',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884663,
    longitude: 0.00035 + 25.46589755
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 273,
    deviceId: 'A81758FFFE030D50',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886614,
    longitude: 0.00035 + 25.4658962
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 274,
    deviceId: 'A81758FFFE03103F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869281,
    longitude: 0.00035 + 25.46593376
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 275,
    deviceId: 'A81758FFFE031086',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871147,
    longitude: 0.00035 + 25.46593308
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 276,
    deviceId: 'A81758FFFE030FCF',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877142,
    longitude: 0.00035 + 25.46593376
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 277,
    deviceId: 'A81758FFFE030FCE',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879178,
    longitude: 0.00035 + 25.46593443
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 278,
    deviceId: 'A81758FFFE030FCD',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880959,
    longitude: 0.00035 + 25.4659351
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 279,
    deviceId: 'A81758FFFE030FCC',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882825,
    longitude: 0.00035 + 25.46593577
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 280,
    deviceId: 'A81758FFFE030FCB',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0588455,
    longitude: 0.00035 + 25.4659351
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 281,
    deviceId: 'A81758FFFE030FCA',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886473,
    longitude: 0.00035 + 25.46593443
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 282,
    deviceId: 'A81758FFFE030FE4',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0586733,
    longitude: 0.00035 + 25.46597466
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 283,
    deviceId: 'A81758FFFE031095',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869253,
    longitude: 0.00035 + 25.46597064
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 284,
    deviceId: 'A81758FFFE031085',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871119,
    longitude: 0.00035 + 25.46596929
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 285,
    deviceId: 'A81758FFFE030FC8',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05872985,
    longitude: 0.00035 + 25.46596862
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 286,
    deviceId: 'A81758FFFE030FC7',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875106,
    longitude: 0.00035 + 25.46596929
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 287,
    deviceId: 'A81758FFFE030FC6',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877057,
    longitude: 0.00035 + 25.46597064
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 288,
    deviceId: 'A81758FFFE030FC5',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879065,
    longitude: 0.00035 + 25.46597131
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 289,
    deviceId: 'A81758FFFE030FC4',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880874,
    longitude: 0.00035 + 25.46597265
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 290,
    deviceId: 'A81758FFFE030FC3',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882797,
    longitude: 0.00035 + 25.46597265
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 291,
    deviceId: 'A81758FFFE030FC2',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884494,
    longitude: 0.00035 + 25.46597265
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 292,
    deviceId: 'A81758FFFE030FC1',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886416,
    longitude: 0.00035 + 25.46597064
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 293,
    deviceId: 'A81758FFFE030D4C',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869253,
    longitude: 0.00035 + 25.46600886
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 294,
    deviceId: 'A81758FFFE030D4D',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871119,
    longitude: 0.00035 + 25.46600752
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 295,
    deviceId: 'A81758FFFE030FC0',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05873013,
    longitude: 0.00035 + 25.46600685
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 296,
    deviceId: 'A81758FFFE030FBE',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875106,
    longitude: 0.00035 + 25.46600819
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 297,
    deviceId: 'A81758FFFE030FBD',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877057,
    longitude: 0.00035 + 25.46600752
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 298,
    deviceId: 'A81758FFFE030FBC',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879036,
    longitude: 0.00035 + 25.46600953
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 299,
    deviceId: 'A81758FFFE030FBB',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880874,
    longitude: 0.00035 + 25.46601154
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 300,
    deviceId: 'A81758FFFE030FBA',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882769,
    longitude: 0.00035 + 25.46601087
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 301,
    deviceId: 'A81758FFFE030FB9',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884522,
    longitude: 0.00035 + 25.46601087
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 302,
    deviceId: 'A81758FFFE030FB5',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886445,
    longitude: 0.00035 + 25.46600953
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 303,
    deviceId: 'A81758FFFE030D4B',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0586733,
    longitude: 0.00035 + 25.46604574
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 304,
    deviceId: 'A81758FFFE030D4A',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869253,
    longitude: 0.00035 + 25.4660444
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 305,
    deviceId: 'A81758FFFE031084',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05871232,
    longitude: 0.00035 + 25.46604708
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 306,
    deviceId: 'A81758FFFE030FB8',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05873042,
    longitude: 0.00035 + 25.46604574
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 307,
    deviceId: 'A81758FFFE030FB7',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875191,
    longitude: 0.00035 + 25.46604574
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 308,
    deviceId: 'A81758FFFE030FB6',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877,
    longitude: 0.00035 + 25.46604708
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 309,
    deviceId: 'A81758FFFE030FB4',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05879065,
    longitude: 0.00035 + 25.46604976
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 310,
    deviceId: 'A81758FFFE030FB3',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880789,
    longitude: 0.00035 + 25.46604842
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 311,
    deviceId: 'A81758FFFE030FB2',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882882,
    longitude: 0.00035 + 25.46604976
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 312,
    deviceId: 'A81758FFFE030FB1',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884578,
    longitude: 0.00035 + 25.46604976
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 313,
    deviceId: 'A81758FFFE030FB0',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886445,
    longitude: 0.00035 + 25.46604708
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 314,
    deviceId: 'A81758FFFE031082',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05869253,
    longitude: 0.00035 + 25.46609402
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 315,
    deviceId: 'A81758FFFE031081',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05870893,
    longitude: 0.00035 + 25.46609268
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 316,
    deviceId: 'A81758FFFE030FAE',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05872929,
    longitude: 0.00035 + 25.46609536
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 317,
    deviceId: 'A81758FFFE030FAD',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05875021,
    longitude: 0.00035 + 25.46609536
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 318,
    deviceId: 'A81758FFFE030FAC',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05877114,
    longitude: 0.00035 + 25.46609268
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 319,
    deviceId: 'A81758FFFE030FAB',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.0587898,
    longitude: 0.00035 + 25.46609268
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 320,
    deviceId: 'A81758FFFE030FA8',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880676,
    longitude: 0.00035 + 25.46609268
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 321,
    deviceId: 'A81758FFFE030FAA',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882825,
    longitude: 0.00035 + 25.46609268
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 322,
    deviceId: 'A81758FFFE030FA9',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884465,
    longitude: 0.00035 + 25.46608999
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 323,
    deviceId: 'A81758FFFE030FA7',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886445,
    longitude: 0.00035 + 25.46608999
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 324,
    deviceId: 'A81758FFFE030FF9',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882938,
    longitude: 0.00035 + 25.46533898
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 325,
    deviceId: 'A81758FFFE030F56',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05881525,
    longitude: 0.00035 + 25.46527997
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 326,
    deviceId: 'A81758FFFE030F79',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884748,
    longitude: 0.00035 + 25.46524644
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 327,
    deviceId: 'A81758FFFE030F80',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882938,
    longitude: 0.00035 + 25.46524644
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 328,
    deviceId: 'A81758FFFE030F81',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05880959,
    longitude: 0.00035 + 25.46524644
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 329,
    deviceId: 'A81758FFFE031056',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05886445,
    longitude: 0.00035 + 25.46520889
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 330,
    deviceId: 'A81758FFFE030F7C',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05884635,
    longitude: 0.00035 + 25.46520621
  }
},
  {
    deviceType: 'co2Sensor', 
    status: 'installed',
    serial: 331,
    deviceId: 'A81758FFFE030F7F',
    locationId: 'tellus',
    coordinates: { latitude: -0.00009 + 65.05882769,
    longitude: 0.00035 + 25.46520755
 }
 }
]
  overlayOpen;
  overlay;
  latitude;
  longitude;
  constructor() { }

  getSensors(){
    //sensors is a list of sensor objects this function is a placeholder for a database query
  return this.sensors;
  }

  openNewDeviceDialog(latitude?, longitude?){
    //save lat/lon to this service (piped to overlay)
    this.latitude =  latitude;
    this.longitude = longitude;
    // triggers overlay at overlay component
    this.overlay = true;
    this.overlayOpen = uuid.v4();
    console.log(this.overlayOpen);
}

  addDeviceToDatabase( device ){
    console.log(this.sensors);
    this.sensors.push( device );
    console.log('added resource: ' + JSON.stringify(device));
    this.overlay = false;

  }
}
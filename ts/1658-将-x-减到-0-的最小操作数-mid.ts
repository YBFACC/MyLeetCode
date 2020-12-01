
//自己--前缀和

function minOperations(nums: number[], x: number): number {
  let res = Infinity
  const Len = nums.length
  const right = new Map()
  let temp = 0
  for (let i = Len - 1; i >= 0; i--) {
    temp += nums[i]
    right.set(temp, i)
  }

  temp = 0
  for (let i = 0; i < Len; i++) {
    const floor = x - temp
    if (floor === 0) {
      res = Math.min(res, i)
    }
    if (right.has(floor)) {
      const _res = right.get(floor)
      if (_res < i) continue
      res = Math.min(res, i + Len - _res)
    }
    temp += nums[i]
  }

  return res === Infinity ? -1 : res
};

minOperations([5, 2, 3, 1, 1], 5)

minOperations([66, 2710, 7208, 3968, 3429, 8234, 1514, 661, 1314, 1953, 6929, 4058, 3686, 2679, 4984, 9193, 9586, 1574, 1626, 2362, 7937, 7205, 311, 2483, 833, 7505, 3096, 3771, 3925, 4184, 941, 8445, 5013, 3434, 2526, 4480, 1820, 2980, 294, 4416, 1547, 9375, 3327, 6751, 3102, 2721, 5209, 5856, 2907, 2410, 8199, 4830, 2091, 5105, 6974, 3430, 5867, 6097, 1035, 8327, 8500, 3472, 5109, 9260, 2880, 2900, 5434, 3883, 8029, 7849, 9918, 7098, 5192, 5822, 447, 4874, 946, 3629, 2031, 9945, 2111, 9165, 3754, 7330, 3374, 3689, 2578, 61, 5589, 2602, 9463, 950, 1591, 2153, 3144, 6746, 5785, 2087, 4927, 1889, 3033, 6241, 8010, 4715, 3437, 6950, 6299, 6926, 7330, 2406, 8245, 8494, 2749, 7584, 6365, 9067, 5105, 1718, 3460, 1683, 5977, 7577, 168, 8106, 4881, 6948, 2668, 7653, 8316, 8605, 734, 710, 8275, 845, 2968, 758, 8128, 1242, 7528, 701, 9416, 1955, 3663, 1480, 449, 2251, 454, 4681, 5224, 5811, 1366, 2738, 6331, 8135, 9819, 4421, 7043, 2375, 3301, 4413, 6307, 8029, 1934, 3062, 955, 9515, 7329, 1368, 5776, 7895, 7363, 8861, 1235, 1898, 966, 6571, 3069, 2017, 8833, 4577, 7918, 6587, 1100, 7319, 5923, 4778, 1540, 7023, 7969, 611, 7701, 8067, 5362, 713, 1525, 6711, 1788, 3835, 5275, 7729, 4798, 8880, 3882, 7292, 5799, 7849, 8206, 9617, 1631, 5564, 7952, 1426, 3107, 1945, 677, 5712, 3508, 1466, 7694, 2648, 6331, 8254, 6913, 5176, 2503, 8507, 1648, 6129, 508, 9143, 9747, 5483, 8614, 5807, 6092, 3892, 3613, 1007, 9935, 1538, 2816, 3424, 7254, 9226, 8174, 9169, 981, 4090, 857, 6167, 4460, 391, 7124, 2697, 1318, 2027, 2585, 6001, 7460, 5852, 6330, 7073, 3834, 3884, 5004, 3629, 3602, 3195, 2791, 3781, 9015, 5349, 2415, 7044, 8347, 430, 6717, 5293, 7912, 4260, 8199, 1988, 3707, 6786, 2402, 1407, 5880, 9860, 7582, 528, 6226, 3462, 9548, 7165, 7994, 2153, 7051, 1934, 6822, 5676, 2808, 4715, 1079, 6133, 4029, 8771, 9315, 836, 5334, 5195, 8351, 5718, 6212, 339, 2110, 5011, 8571, 7439, 6671, 2947, 5381, 4886, 5955, 1953, 6229, 1961, 5185, 3600, 4502, 8740, 4938, 6452, 3480, 7601, 1138, 403, 8872, 2174, 4449, 9992, 536, 8104, 1355, 1948, 3483, 750, 8320, 9166, 9474, 746, 7742, 4460, 5574, 1810, 5896, 7695, 5688, 4985, 3401, 5587, 1849, 9883, 4168, 7247, 1243, 9060, 3849, 4777, 5850, 2256, 3992, 7950, 5261, 3174, 4019, 9733, 5732, 7409, 1298, 1773, 5383, 9566, 9891, 1757, 6604, 825, 8192, 856, 9448, 4267, 922, 5342, 5928, 5123, 4889, 1251, 1918, 4030, 2820, 7483, 9991, 1938, 6657, 9264, 122, 594, 8188, 3054, 6259, 2594, 2306, 9930, 3552, 2671, 9242, 3829, 9787, 5543, 2889, 649, 9111, 8509, 3139, 6761, 607, 6015, 1331, 3407, 3727, 6119, 5529, 7894, 7111, 4042, 1467, 8285, 3446, 8014, 6630, 6301, 890, 3032, 7521, 5974, 1110, 2502, 1959, 9160, 4244, 2750, 3129, 4770, 6867, 5275, 3087, 2406, 1197, 851, 6497, 4563, 9894, 8918, 7880, 8667, 2732, 3315, 7946, 6659, 330, 541, 3756, 2513, 1755, 2892, 6533, 5926, 9356, 2446, 2476, 6247, 43, 6442, 6244, 2834, 800, 6865, 381, 6244, 8855, 4404, 6127, 8328, 3928, 7940, 9259, 2055, 5904, 9164, 6936, 2535, 7939, 1344, 2235, 521, 7134, 6152, 2162, 1408, 7931, 3826, 650, 6846, 3944, 1047, 5432, 941, 2009, 1756, 341, 7930, 4171, 7877, 601, 4164, 8312, 3469, 6108, 7474, 4267, 3163, 30, 1211, 2033, 4277, 4506, 8763, 803, 7424, 2061, 9409, 2829, 3936, 4366, 662, 3734, 2366, 826, 5794, 3147, 9879, 2997, 1142, 9847, 2391, 2287, 3712, 2797, 8735, 1562, 4689, 2442, 8666, 3485, 4862, 1030, 9124, 4512, 3678, 1454, 6192, 3906, 6415, 7781, 4436, 2685, 1397, 2672, 7390, 7382, 1880, 3887, 7836, 6010, 5855, 1777, 301, 294, 378, 1192, 2020, 209, 1313, 6740, 5024, 9156, 2229, 408, 5637, 6812, 2209, 4237, 4984, 6756, 2270, 97, 7004, 6353, 5332, 4377, 450, 4718, 2432, 5712, 1874, 735, 400, 3555, 4743, 8691, 2334, 7916, 2591, 3449, 4952, 9058, 8088, 4615, 273, 7368, 6465, 3744, 6810, 4152, 1444, 5614, 7066, 4645, 9041, 9825, 8562, 4544, 3975, 8908, 8045, 2947, 7174, 493, 2764, 1262, 4880, 5227, 6713, 4610, 8455, 5497, 1529, 511, 6882, 3568, 853, 8206, 9753, 3947, 1619, 6555, 8265, 5993, 9070, 9804, 5494, 5415, 9149, 8875, 1404, 2800, 6910, 3183, 5370, 8487, 8951, 4829, 7449, 2513, 9197, 8832, 5568, 6685, 2642, 4922, 9864, 3567, 9435, 7625, 2854, 5177, 9583, 9525, 6758, 1407, 5555, 5040, 2247, 4065, 6144, 5105, 2334, 3218, 7984, 6585, 1058, 3651, 7371, 756, 2401, 8828, 3175, 1244, 9889, 6598, 3012, 6597, 9191, 625, 6033, 782, 5530, 9636, 3920, 2585, 809, 3331, 1739, 1322, 2579, 450, 8341, 6364, 7718, 4094, 6677, 2302, 2959, 1138, 6263, 5096, 1280, 4901, 5140, 5286, 1615, 7387, 2729, 2043, 2129, 3713, 249, 8518, 1248, 7501, 9053, 445, 5566, 64, 4026, 8626, 2479, 9114, 987, 5853, 3704, 2845, 1197, 7158, 180, 2539, 406, 7409, 3780, 7423, 5513, 7068, 6498, 2524, 3494, 9140, 2901, 8260, 8193, 9305, 8236, 9107, 8341, 4692, 8151, 8231, 9162, 7001, 9181, 4454, 8117, 6116, 4297, 961, 305, 5078, 4406, 7430, 9751, 7800, 8323, 1915, 6912, 6745, 882, 2880, 6504, 4255, 4588, 6314, 139, 6911, 2118, 203, 9576, 7835, 2656, 2606, 190, 2312, 9565, 9575, 7657, 2353, 2332, 1183, 9531, 9639, 9127, 916, 7529, 9831, 3353, 4802, 4856, 2370, 9720, 3647, 5049, 2363, 8247, 5357, 7677, 2158, 4263, 9554, 1556, 1802, 3247, 3984, 6118, 4138, 881, 950, 5395, 3145, 8545, 7754, 4493, 1413, 5710, 157, 2800, 2047, 8106, 280, 7674, 2812, 6137, 6844, 704, 5757, 9129, 910, 1266, 5017, 8352, 9585, 3521, 8028, 6750, 2545, 595, 6264, 4378, 3491, 6448, 3251, 8145, 4958, 2033, 9524, 2660, 9569, 8275, 1806, 7865, 7758, 2016, 1290, 8464, 5376, 6684, 6696, 6646, 168, 5345, 7897, 7128, 806, 203, 4907, 213, 5766, 3633, 8046, 2685, 3040, 6666, 2404, 3074, 6469, 3776, 7525, 7563, 6275, 1976, 5741, 9930, 8657, 4691, 9105, 81, 5348, 3768, 6729, 7103, 5847, 2346, 8368, 1238, 2488, 9794, 122, 3491, 7188, 6080, 3007, 6223, 2209, 2825, 564, 8951, 8217, 7962, 6483, 3392, 5845, 4889, 9953, 2623, 5423, 1684, 555, 5115, 9210, 9283, 3846, 9746, 435, 7142, 4218, 4068, 8173, 3087, 9619, 9432, 7666, 5584, 4876, 4954, 7050, 1291, 6433, 7345, 6977, 8111, 1494, 4262, 3596, 6162, 7468, 5275, 2085, 3025, 6660, 5250, 9236, 5900, 6560, 3428, 8242, 3274, 201, 4204, 6859, 5354, 5016, 6533, 6119, 7103, 2374, 4917, 3877, 4575, 101, 4334, 8944, 950, 4808, 7492, 3036, 7146, 8229, 8507, 5235, 4258, 8834, 4667, 5532, 3002, 3323, 7761, 8794, 8944, 7396, 8598, 2032, 4812, 8299, 7262, 2453, 5837, 4669, 772, 3469, 1100, 8457, 2555, 4443, 1479, 3218, 755, 337, 3762, 6451, 4326, 7835, 4056, 6288, 8899, 8995, 4883, 5539, 8976, 1604, 5550, 4951, 4356, 9001, 2749, 7612, 7139, 5993, 5747, 3141, 763, 5652, 8856, 9983, 2068, 8371, 5888, 2375, 3062, 8857, 9044, 4390, 5023, 4269, 4609, 2512, 2407, 4337, 9021, 7055, 2090, 1765, 3102, 5549, 2525, 242, 7964, 6960, 6862, 1835, 9341, 112, 1739, 3487, 8552, 8872, 7521, 9821, 4420, 7693, 6994, 4052, 8007, 4885, 9217, 4183, 5175, 503, 9292, 5181, 102, 6830, 3877, 9841, 2945, 4400, 5649, 8695, 2773, 1201, 7093, 7487, 4250, 6052, 1326, 8, 77, 6742, 1099, 8622, 4469, 1772, 8801, 7610, 4392, 9707, 1599, 6997, 7098, 2411, 3561, 8088, 9353, 5949, 5786, 47, 4361, 4020, 6096, 2646, 7767, 6022, 148, 970, 8509, 341, 9406, 6918, 7559, 2917, 4374, 3216, 6943, 8208, 8088, 1443, 2239, 6913, 9784, 9258, 5592, 9345, 534, 4266, 8851, 3050, 4646, 620, 4904, 4032, 5915, 1495, 7380, 7607, 1654, 7212, 5087, 295, 6524, 2092, 3192, 678, 4038, 9906, 9150, 8547, 2633, 7233, 4104, 7900, 9660, 6770, 1058, 6510, 5553, 8299, 546, 9533, 831, 377, 7402, 9741, 9981, 1477, 6927, 9868, 1967, 4907, 6171, 2499, 7020, 6723, 7524, 2427, 6672, 9994, 9043, 8158, 5878, 7649, 2597, 4989, 5211, 4504, 7082, 2567, 9978, 1339, 9973, 8521, 7942, 1538, 1454, 2379, 4844, 5648, 2355, 8576, 356, 2409, 8687, 3813, 285, 9263, 3363, 9671, 3914, 4076, 8994, 8249, 7266, 4835, 6650, 2478, 636, 7391, 5289, 9980, 3662, 7887, 9331, 7464, 6812, 2460, 753, 4614, 631, 5347, 2152, 4474, 2870, 1940, 7739, 5383, 1067, 703, 8599, 6790, 9446, 747, 8640, 977, 538, 716, 3110, 7879, 1197, 9145, 977, 9518, 3687, 1449, 3065, 3679, 3162, 2482, 7601, 6594, 6548, 2047, 1746, 2092, 7504, 8122, 595, 753, 1044, 6036, 4700, 9694, 6447, 3757, 5521, 5506, 1975, 614, 7539, 1896, 4367, 9605, 2751, 3252, 6944, 7969, 4379, 8589, 1679, 4401, 340, 9280, 4456, 1160, 5788, 5049, 2937, 4177, 5400, 4112, 3037, 2784, 2380, 7041, 6073, 5295, 5134, 5905, 5376, 3493, 9800, 3240, 4918, 6632, 5630, 5078, 141, 6280, 9443, 9733, 6620, 6381, 1573, 611, 6459, 9405, 9781, 6902, 1585, 616, 9266, 1667, 2574, 8358, 6051, 3868, 9756, 3980, 7413, 8877, 1127, 44, 5225, 5396, 3583, 5280, 5719, 7092, 6519, 3821, 8484, 2828, 8606, 5610, 8237, 4678, 9535, 1789, 9238, 9992, 806, 4590, 603, 8943, 4852, 4078, 8992, 5765, 2311, 8792, 5672, 3536, 6730, 1174, 4778, 789, 7670, 9628, 2022, 4910, 6183, 7681, 2169, 3819, 9890, 1957, 3047, 6223, 4421, 3354, 982, 3074, 6487, 2093, 7574, 7734, 5524, 4901, 5657, 9412, 7397, 8450, 7035, 5287, 2655, 2464, 9944, 7039, 7838, 7714, 6797, 4626, 9631, 6484, 5650, 1005, 4889, 6624, 2783, 3270, 3823, 5065, 6872, 5804, 9077, 7746, 4462, 4951, 4747, 6404, 2664, 3720, 4488, 6881, 3845, 679, 6120, 6841, 2494, 2308, 6077, 7554, 3456, 1215, 8630, 1815, 2754, 6691, 1482, 7002, 5047, 3076, 8863, 1781, 8850, 6169, 1105, 8199, 8861, 6528, 7026, 8576, 3032, 8470, 1837, 5845, 2170, 5648, 8113, 5152, 3289, 6321, 7758, 3201, 3321, 7183, 4566, 8924, 9476, 7650, 3849, 8274, 4628, 3181, 4611, 2980, 7845, 8515, 8727, 8240, 1370, 7536, 5630, 5371, 3577, 8288, 2969, 6398, 6812, 5580, 8078, 3444, 4707, 185, 6708, 5485, 8252, 5130, 5980, 4878, 5845, 5068, 2500, 895, 7919, 1412, 5986, 8914, 3777, 1864, 5248, 8660, 9654, 3728, 8509, 3253, 8335, 6402, 1057, 6686, 3312, 3177, 9245, 506, 3508, 8744, 5392, 7316, 1002, 8781, 3919, 4814, 9455, 4932, 4562, 2076, 7003, 4452, 7203, 9080, 6768, 8564, 8085, 1880, 8778, 6614, 830, 2824, 7780, 9332, 7555, 8702, 7361, 3657, 3259, 5490, 3109, 4263, 8672, 8458, 2892, 5157, 808, 8951, 9849, 6258, 5355, 9639, 383, 8041, 7093, 1923, 760, 6587, 9624, 3839, 1545, 9917, 1529, 7269, 7352, 2103, 406, 2749, 9640, 1190, 560, 4502, 2512, 4575, 6507, 251, 8849, 5827, 9999, 6937, 7976, 6903, 2332, 8041, 7264, 7255, 2354, 4910, 3925, 650, 6643, 9477, 7222, 7665, 608, 5861, 7681, 1030, 7239, 2718, 4623, 2774, 9818, 3357, 756, 285, 628, 1768, 370, 123, 4728, 4930, 942, 7395, 8528, 4935, 2464, 9582, 5250, 2475, 6529, 4476, 5711, 6328, 2818, 9525, 6808, 5699, 7915, 2825, 9380, 9952, 4540, 7634, 7777, 2490, 6422, 3479, 1648, 5544, 4426, 5841, 1848, 2541, 1757, 4111, 6576, 4700, 7565, 9143, 5157, 9621, 8969, 1248, 8418, 9395, 9517, 3810, 1302, 1292, 911, 9004, 7270, 6512, 6915, 534, 186, 4278, 9972, 5589, 1141, 6714, 583, 8170, 6122, 3121, 1156, 9819, 9039, 5281, 3493, 5218, 2556, 8176, 1273, 1429, 6144, 6717, 3999, 9987, 1508, 8987, 8840, 9867, 1227, 1159, 9759, 3604, 3765, 2354, 8584, 8606, 2084, 3087, 6542, 8541, 9754, 974, 3941, 7432, 669, 2780, 122, 344, 2788, 4753, 6397, 9235, 6561, 3830, 1137, 6950, 3237, 4450, 3000, 1587, 8156, 6478, 8438, 6129, 4807, 7339, 5453, 2241, 686, 3889, 837, 3408, 4394, 4065, 5410, 2696, 4620, 3556, 4161, 6737, 9750, 6158, 857, 4757, 1903, 3071, 6824, 5899, 3997, 5753, 6943, 9153, 7623, 4969, 3549, 7659, 7544, 7771, 6363, 4984, 6004, 6067, 3143, 9126, 3744, 6292, 5543, 4076, 7833, 9206, 7573, 1951, 6775, 2191, 5035, 8114, 8924, 3037, 5598, 1735, 4388, 5284, 3174, 8090, 7031, 7016, 1777, 5730, 2053, 6806, 1166, 4256, 5922, 9101, 8036, 5799, 2890, 9620, 7004, 5509, 4008, 6381, 8819, 2929, 3810, 4690, 1262, 2504, 217, 6407, 8791, 9456, 272, 5042, 7755, 7565, 2879, 9755, 8554, 9803, 1209, 562, 1666, 3069, 7479, 9319, 3490, 7622, 6540, 7126, 4606, 4811, 8149, 6794, 3782, 9554, 7800, 3865, 5186, 2721, 1298, 9301, 2841, 2745, 8236, 2260, 2800, 9469, 7889, 2218, 3499, 2930, 4944, 38, 7421, 6069, 3361, 4498, 2331, 2255, 2304, 9089, 5857, 86, 2138, 7593, 9818, 2036, 4433, 4090, 6240, 1190, 9373, 4421, 240, 1857, 4575, 7365, 5322, 2061, 387, 3661, 4620, 2446, 5496, 8416, 4251, 6050, 5061, 4860, 5468, 3448, 10, 56, 6431, 4056, 2209, 7242, 5797, 9125, 8445, 2507, 9258, 173, 8646, 3953, 881, 7276, 7878, 397, 9646, 4108, 3231, 4509, 5730, 1357, 8611, 5212, 3957, 4250, 916, 7570, 8899, 9930, 7593, 8659, 2943, 6090, 313, 5178, 6604, 8476, 2316, 8340, 7819, 4888, 4183, 6156, 4859, 5394, 1184, 4082, 607, 3898, 56, 1766, 8043, 7955, 7520, 4395, 5071, 3159, 7596, 6503, 4097, 778, 4128, 6218, 7749, 4985, 4545, 708, 5480, 7678, 448, 9680, 2277, 856, 430, 3309, 3268, 8412, 1199, 9688, 9639, 9585, 1182, 3543, 6614, 3678, 6004, 353, 3618, 4968, 7709, 7776, 6242, 9953, 9361, 5110, 6647, 3494, 455, 8454, 5001, 8928, 1864, 4092, 7983, 3765, 7199, 682, 7848, 895, 2382, 2564, 3499, 8380, 3480, 7890, 4349, 7636, 3017, 4421, 8146, 875, 6223, 4355, 984, 8704, 4090, 4661, 3863, 8600, 4771, 8817, 5144, 3827, 5804, 4466, 5350, 5191, 7521, 5248, 8581, 4130, 6606, 6194, 6438, 2504, 8061, 7581, 4034, 2164, 4150, 8245, 554, 9961, 515, 8473, 6112, 5470, 6603, 3703, 5102, 3658, 9415, 9420, 82, 4033, 9926, 2064, 3436, 6921, 942, 5945, 2653, 2143, 9688, 9631, 876, 2413, 5585, 9612, 6512, 126, 5502, 2661, 7509, 9115, 8867, 2468, 8015, 55, 6270, 461, 4496, 4045, 6783, 6140, 1092, 7874, 9263, 4837, 111, 1865, 4811, 7701, 7075, 2140, 636, 6037, 8728, 7815, 2972, 2722, 854, 8939, 7288, 6833, 6097, 794, 5435, 4845, 3655, 9254, 3456, 2119, 7949, 4767, 4726, 81, 273, 5259, 1457, 3157, 4681, 6493, 2043, 1718, 5210, 9259, 7594, 7351, 6988, 9948, 8239, 5947, 9259, 6636, 7409, 5547, 3643, 7743, 8982, 893, 3861, 7188, 5654, 7050, 4363, 9962, 5058, 8467, 6082, 8292, 635, 7358, 1365, 6641, 7031, 3483, 2104, 5859, 9715, 4418, 2730, 3529, 9375, 3851, 7830, 3075, 3981, 6483, 1536, 7450, 1875, 3375, 1310, 179, 2535, 1620, 6087, 5586, 8365, 4256, 3320, 6845, 2803, 7062, 2121, 898, 6029, 4443, 8865, 3214, 5512, 8522, 7857, 2622, 59, 1091, 7562, 9284, 759, 2133, 9115, 6672, 4053, 3659, 3751, 455, 3869, 3585, 3942, 3578, 5254, 8497, 1230, 7487, 5920, 9440, 597, 3664, 7405, 4549, 967, 3219, 118, 866, 4494, 169, 6144, 7259, 2673, 3095, 1979, 5022, 1597, 7210, 2580, 906, 6987, 5064, 5500, 805, 3282, 2200, 2285, 3042, 94, 9811, 5160, 2051, 5824, 4602, 9403, 460, 9926, 6150, 8311, 7115, 7010, 8905, 8706, 7970, 8539, 7992, 6691, 4954, 530, 2987, 2410, 3024, 5344, 8530, 8015, 1935, 9433, 7781, 4333, 2667, 4524, 181, 564, 9927, 2219, 9286, 3005, 4264, 4389, 7932, 8084, 9511, 1087, 764, 2883, 1655, 9782, 884, 576, 7341, 868, 9363, 9787, 5326, 1256, 2478, 1991, 3639, 3820, 939, 8032, 765, 2763, 8895, 7607, 5790, 6381, 5551, 9044, 9863, 1899, 7224, 3298, 6674, 9850, 547, 3536, 2054, 6949, 4799, 4977, 8444, 9120, 5831, 1354, 4868, 3607, 2929, 1875, 7507, 5285, 5157, 6698, 1966, 7121, 2188, 9189, 7693, 5165, 4659, 5223, 1027, 3513, 6791, 429, 53, 2036, 3388, 9513, 309, 3827, 7187, 1412, 8346, 2759, 9289, 7143, 7729, 6656, 344, 8460, 2318, 9248, 3090, 9129, 2363, 8728, 5886, 7618, 968, 9041, 3530, 7712, 4820, 6045, 6516, 4454, 1798, 5698, 5824, 3998, 1990, 3629, 6562, 1797, 1875, 9778, 4464, 7954, 4011, 1066, 3123, 1967, 6026, 3449, 42, 5119, 3935, 3843, 9851, 9272, 6134, 2558, 3659, 1009, 1960, 5305, 8297, 2116, 4945, 2085, 6782, 6689, 3034, 6874, 5663, 2182, 3333, 600, 9816, 7305, 6313, 4924, 123, 3755, 1864, 3240, 5370, 8505, 4570, 7839, 9365, 3217, 2108, 5674, 2832, 1008, 2042, 8211, 2380, 717, 2670, 7200, 1648, 8510, 5094, 9460, 64, 6327, 4844, 7276, 2332, 5908, 5067, 7356, 6987, 1538, 1552, 3309, 2452, 1145, 6846, 1939, 7775, 7859, 264, 7167, 3267, 7936, 2545, 6221, 6063, 7548, 4076, 4558, 694, 5349, 9043, 7476, 8784, 1650, 8978, 5122, 8307, 7753, 1856, 2695, 2100, 4636, 4220, 7715, 7273, 7245, 9295, 8694, 5953, 4159, 3816, 2277, 8429, 4030, 3157, 7430, 1333, 4587, 2147, 8089, 3826, 4649, 6484, 2746, 9206, 975, 8100, 2583, 3866, 8124, 542, 2460, 8578, 5515, 4537, 5658, 2457, 5733, 141, 2331, 8074, 5338, 1048, 1733, 3826, 2032, 6005, 5377, 1891, 5901, 4510, 1265, 9816, 7306, 3796, 4094, 5767, 5019, 1474, 4643, 8572, 9559, 8329, 9653, 4662, 6990, 7925, 3526, 4374, 6986, 7715, 1477, 9037, 8613, 8394, 6719, 2695, 6821, 9843, 8963, 1248, 6139, 1313, 9895, 4384, 5416, 134, 1711, 1822, 2722, 9299, 4341, 9300, 6180, 5826, 9046, 3033, 905, 3711, 8780, 5241, 1486, 2432, 5193, 5822, 5045, 1664, 7636, 2923, 9549, 9046, 2543, 2871, 1667, 2037, 1939, 7506, 5010, 2103, 1156, 8632, 4324, 2427, 9311, 2049, 1904, 6651, 6283, 7408, 6056, 5297, 4895, 3535, 4060, 6087, 1112, 1697, 363, 5096, 6654, 4998, 9577, 4422, 8496, 7573, 8343, 4880, 1570, 242, 8682, 2794, 1448, 2748, 8451, 9989, 4532, 7198, 3308, 7305, 1962, 6889, 1034, 7888, 4865, 3440, 2418, 638, 6900, 4899, 5842, 3171, 4931, 3372, 8073, 500, 9214, 8636, 5296, 1839, 5805, 705, 5107, 2218, 4254, 6523, 2184, 6655, 5680, 5761, 191, 7517, 5061, 5827, 482, 6300, 4026, 4277, 3650, 4356, 7970, 1546, 4551, 6967, 9458, 6616, 7174, 4841, 4779, 7722, 1088, 3196, 959, 2086, 3583, 124, 7979, 1819, 5174, 5132, 973, 113, 2725, 2747, 4605, 2408, 8217, 5710, 2783, 5732, 4192, 204, 2370, 746, 5286, 1991, 2314, 255, 1711, 6856, 1404, 3808, 2978, 2592, 2766, 8727, 3102, 1466, 2909, 7106, 2295, 6193, 859, 1858, 6396, 5113, 8964, 1608, 6706, 6667, 8809, 9684, 1533, 7447, 4343, 227, 2485, 5792, 925, 9153, 7654, 267, 853, 2875, 126, 2517, 976, 3592, 6775, 6037, 5657, 6549, 5277, 2808, 9852, 713, 8194, 3671, 677, 524, 9130, 5898, 281, 757, 477, 774, 8520, 8046, 7887, 7495, 272, 7600, 5347, 7898, 5481, 882, 9420, 8525, 2893, 8377, 6385, 4876, 2901, 1000, 5975, 357, 5401, 2505, 2519, 4433, 6669, 95, 5459, 6519, 3582, 7141, 3124, 2720, 7443, 8505, 1690, 9657, 6126, 9068, 1094, 6140, 3336, 2111, 9581, 3139, 9495, 5661, 4338, 4208, 3294, 6975, 4394, 5003, 1491, 6303, 6942, 4319, 7155, 2622, 2897, 9397, 2065, 7449, 7595, 108, 448, 2053, 4584, 2331, 339, 5682, 1016, 5392, 8314, 8462, 849, 8251, 5271, 2521, 9741, 145, 9619, 8002, 8782, 7866, 2629, 466, 3156, 2989, 4695, 2336, 8593, 1415, 4426, 7864, 457, 4261, 1524, 8011, 798, 6229, 7868, 4873, 361, 5129, 2246, 831, 9969, 2599, 6620, 9533, 4320, 6824, 7736, 8025, 5695, 8592, 2175, 9018, 829, 5430, 68, 7189, 9566, 9264, 6870, 9484, 8589, 6776, 6256, 491, 3359, 9116, 9926, 3915, 3961, 2667, 5449, 2553, 4145, 9727, 6600, 6107, 2163, 6392, 7030, 9350, 5276, 9634, 9012, 3145, 2280, 1709, 2742, 7234, 1498, 3768, 45, 3238, 3270, 7642, 5152, 9454, 62, 9786, 7845, 3653, 5018, 7092, 4984, 6829, 6044, 4785, 8437, 9047, 9379, 5376, 9217, 2375, 6432, 7699, 5470, 5598, 3852, 6435, 5142, 7183, 6713, 9919, 1832, 3898, 4467, 1628, 8392, 8428, 462, 4088, 9365, 6473, 4532, 6489, 3943, 6771, 5429, 8484, 1266, 7876, 9996, 6777, 5753, 1423, 8064, 8100, 7320, 9366, 4924, 4470, 1646, 4880, 882, 2772, 5591, 5200, 1488, 236, 4810, 751, 2110, 4529, 7713, 9114, 5266, 6441, 4611, 829, 7234, 4578, 5876, 173, 837, 5858, 838, 7622, 6471, 890, 3577, 3679, 9812, 2774, 2276, 2418, 9434, 9358, 4853, 5769, 7485, 7304, 7099, 206, 8177, 7162, 8157, 8905, 7831, 685, 3589, 3651, 6922, 9121, 5422, 6497, 1593, 1433, 9929, 8046, 8647, 5082, 256, 9551, 1364, 8712, 1342, 9084, 4809, 4210, 1521, 482, 9898, 5325, 1770, 7886, 9032, 1545, 9439, 1841, 9720, 4839, 6316, 7566, 302, 6958, 3049, 9118, 6525, 7577, 6582, 4309, 9628, 4107, 1643, 6866, 7495, 8390, 3112, 1148, 9795, 9965, 905, 8976, 6479, 8534, 477, 8444, 3601, 641, 4446, 6858, 5288, 418, 109, 5701, 9705, 4681, 9879, 217, 9526, 5424, 941, 4703, 1471, 4324, 4201, 6709, 4193, 9672, 7667, 2539, 6865, 5300, 7467, 8556, 2270, 4925, 6084, 7370, 4857, 7837, 7846, 4116, 6819, 3316, 7540, 8229, 1023, 3154, 4421, 9723, 5847, 6053, 8209, 1017, 9318, 5502, 3371, 3818, 5725, 7859, 3528, 3076, 5028, 691, 5116, 6130, 8905, 609, 3249, 9448, 139, 3726, 6331, 8409, 5858, 1391, 2803, 4908, 8527, 9865, 7850, 7212, 4861, 5434, 5248, 4786, 2010, 8465, 41, 4441, 530, 8762, 2017, 8596, 4803, 8378, 9653, 5492, 4394, 5521, 9175, 2305, 4793, 605, 9098, 8517, 1379, 5516, 3452, 5640, 2910, 3269, 8886, 1090, 7758, 708, 7918, 9961, 2802, 4168, 2084, 3680, 3933, 4802, 1380, 8011, 5307, 4721, 8517, 2387, 709, 4493, 5523, 7259, 3265, 9686, 3370, 2331, 1895, 7023, 4672, 1227, 3550, 5866, 8880, 6246, 5705, 1604, 9275, 1350, 7187, 7289, 3623, 2994, 8467, 2463, 5091, 4107, 2952, 911, 2861, 8654, 9210, 1056, 4323, 7305, 3885, 6993, 4660, 5572, 6999, 2555, 8046, 5826, 5971, 6637, 857, 5789, 1402, 8889, 6389, 6063, 327, 7169, 7597, 5526, 4656, 7630, 3685, 8742, 1861, 1785, 4778, 5573, 7545, 9215, 4606, 8877, 8494, 4930, 771, 2695, 2686, 4715, 7175, 207, 1784, 4499, 8792, 4225, 5596, 1685, 1409, 4056, 811, 3845, 1137, 4942, 9105, 9945, 2227, 1440, 7380, 8466, 5400, 5020, 6994, 3795, 8780, 6903, 8995, 6974, 6975, 5657, 3681, 2952, 196, 707, 2463, 6840, 9810, 9886, 9535, 5644, 2795, 5391, 263, 4892, 9180, 5307, 7447, 4816, 1878, 9575, 3775, 815, 3220, 1600, 4480, 7849, 1083, 7591, 6962, 6306, 2114, 1224, 5375, 1209, 6775, 2710, 3326, 4022, 4827, 621, 9124, 9420, 9823, 7723, 6243, 5522, 5094, 4314, 599, 2329, 467, 9686, 5091, 2168, 5562, 1397, 5326, 4736, 2222, 2764, 7467, 9930, 8790, 8603, 1071, 143, 9097, 3346, 7832, 2631, 917, 1856, 6789, 4967, 553, 5486, 4399, 8611, 1968, 3946, 8533, 8444, 5707, 3584, 8220, 667, 9756, 9701, 3593, 7990, 5891, 8605, 7057, 2858, 6498, 6712, 8727, 8815, 383, 2859, 114, 3842, 3077, 993, 4434, 8117, 6805, 2455, 9933, 5754, 251, 4684, 7929, 5657, 7381, 6806, 7736, 7418, 6535, 9973, 9955, 4742, 676, 5613, 7936, 3106, 1727, 7403, 3227, 7240, 3308, 9429, 8788, 9245, 5425, 6047, 458, 1486, 9514, 7091, 5632, 1432, 5471, 4420, 4365, 2863, 5252, 117, 5240, 6049, 5810, 8716, 8766, 388, 3477, 2049, 9693, 6311, 472, 4227, 1047, 8336, 3519, 9419, 8773, 1468, 9593, 6464, 7492, 7912, 2170, 7560, 587, 8611, 7771, 2285, 6994, 1691, 8512, 1016, 1451, 2960, 2066, 1906, 9978, 6978, 431, 5754, 4578, 7881, 1957, 465, 4088, 8550, 5543, 1455, 4689, 9840, 8113, 2861, 1951, 6142, 6962, 9413, 1786, 4609, 808, 9512, 7725, 3424, 1856, 8340, 1709, 89, 9082, 8977, 9677, 479, 6368, 6838, 2003, 1357, 5131, 8445, 8904, 1038, 9282, 9340, 4409, 1881, 4304, 8491, 409, 9811, 3070, 2896, 4912, 3796, 345, 8427, 5986, 4734, 854, 6623, 4979, 792, 8939, 1056, 4168, 4633, 7621], 3236508)

minOperations([1, 1, 4, 2, 3], 5)
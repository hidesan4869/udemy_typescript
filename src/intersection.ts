export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Butter1 = {
  battingAverage: number;
};

const DaisukeSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const HiromitsuOchiai: Butter1 = {
  battingAverage: 0.367
};
//二つの数字を両立した型を作る方法がintersectionである

type TwoWayPlayer = Pitcher1 & Butter1;
const ShoheiOtani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
};

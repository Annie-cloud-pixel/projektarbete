function inverseCumulativeNormal(p) {
  const a = [-39.6968302866538, 220.946098424521, -275.928510446969, 138.357751867269, -30.6647980661472, 2.50662827745924];
  const b = [-54.4760987982241, 161.585836858041, -155.698979859887, 66.8013118877197, -13.2806815528857];
  const c = [-0.00778489400243029, -0.322396458041136, -2.40075827716184, -2.54973253934373, 4.37466414146497, 2.93816398269878];
  const d = [0.00778469570904146, 0.32246712907004, 2.445134137143, 3.75440866190742];
  const plow = 0.02425;
  const phigh = 1 - plow;
  let q, r;
  if (p < 0 || p > 1) {
    throw new Error("Probability must be between 0 and 1");
  }
  if (p < plow) {
    q = Math.sqrt(-2 * Math.log(p));
    return ((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) / ((d[0] * q + d[1]) * q + 1);
  } else if (p > phigh) {
    q = Math.sqrt(-2 * Math.log(1 - p));
    return -((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) / ((d[0] * q + d[1]) * q + 1);
  } else {
    q = p - 0.5;
    r = q * q;
    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * q) / ((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + 1);
  }
}
function normalRandom(mean, stdDev) {
  let u, v, s;
  do {
    u = Math.random() * 2 - 1;
    v = Math.random() * 2 - 1;
    s = u * u + v * v;
  } while (s >= 1 || s === 0);
  const mul = Math.sqrt(-2.0 * Math.log(s) / s);
  return mean + stdDev * u * mul;
}

function gammaRandom(shape, scale) {
  let d, c, x, v, u;
  if (shape < 1) {
    while (true) {
      let p = Math.random();
      if (p !== 0) {
        return scale * gammaRandom(1 + shape, 1) * Math.pow(p, 1 / shape);
      }
    }
  }
  d = shape - 1 / 3;
  c = 1 / Math.sqrt(9 * d);
  while (true) {
    do {
      x = normalRandom(0, 1);
      v = 1 + c * x;
    } while (v <= 0);
    v = v * v * v;
    u = Math.random();
    if (u < 1 - 0.0331 * x * x * x * x) return scale * d * v;
    if (Math.log(u) < 0.5 * x * x + d * (1 - v + Math.log(v))) return scale * d * v;
  }
}

function betaRandom(alpha, beta) {
  const gamma = (a) => {
    const g = 7;
    const w = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if (a < 0.5) return Math.PI / (Math.sin(Math.PI * a) * gamma(1 - a));
    a -= 1;
    let t = a;
    for (let i = 1; i < g + 2; i++) {
      t += 1;
      a += w[i] / t;
    }
    const v = 0.91893853320467274178;
    return Math.sqrt(2 * Math.PI) * Math.pow(v + a, a + 0.5) * Math.exp(-(v + a));
  };
  const x = gammaRandom(alpha, 1);
  const y = gammaRandom(beta, 1);
  return x / (x + y);
}

function generateRandomData(numPoints, xRange, yRange, correlationStrength, jitterAlpha, jitterBeta, numOutliers, outlierMagnitude) {
  const data = [];
  let sumY = 0;

  for (let i = 0; i < numPoints; i++) {
    let x, y;
    x = Math.random() * xRange;
    const jitter = (betaRandom(jitterAlpha, jitterBeta) - 0.5) * yRange;
    y = x * correlationStrength + jitter;
    y = Math.max(0, Math.min(y, yRange));
    sumY += y;
    data.push({ x: x, y: y });
  }

  const meanY = sumY / numPoints;
  for (let i = 0; i < numOutliers; i++) {
    const x = Math.random() * xRange;
    const sign = Math.random() < 0.5 ? -1 : 1;
    const y = meanY + sign * (Math.random() * outlierMagnitude);
    data.push({ x: x, y: y });
  }
  return data;
}

const numPoints = 200;
const xRange = 100;
const yRange = 100;
const correlationStrength = 1; // A value between -1 and 1
const jitterAlpha = 17; // Controls the spread of points around the line (symmetric when jitterAlpha === jitterBeta)
const jitterBeta = 10; // Controls the spread of points around the line (symmetric when jitterAlpha === jitterBeta)
const numOutliers = 90;
const outlierMagnitude = 25;
const dataScatter = generateRandomData(numPoints, xRange, yRange, correlationStrength, jitterAlpha, jitterBeta, numOutliers, outlierMagnitude);
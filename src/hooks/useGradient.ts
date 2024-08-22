export const gradients = [
  'radial-gradient(155.92% 155.92% at 81.25% 117.5%, #FC7DFF 17.29%, #FFED91 75.93%)',
  'radial-gradient(125.56% 125.56% at 23.21% 8.93%, #FFBE82 26.5%, #FF7D7D 56.21%), radial-gradient(132.53% 132.53% at 0% 100%, #B6FF7D 31.8%, #FF91B2 75.7%)',
  'radial-gradient(173.79% 173.79% at 54.46% -42.86%, #5887FF 16.15%, #FFA0FB 72.4%), radial-gradient(164.21% 164.21% at 5% -7.5%, #5C80FF 31.8%, #ADFF5C 75.7%), radial-gradient(155.92% 155.92% at 81.25% 117.5%, #FC7DFF 17.29%, #FFED91 75.93%)',
  'radial-gradient(137.5% 137.5% at 100% 82.5%, #FFD65C 31.8%, #3CF893 75.7%)',
  'radial-gradient(146.59% 146.59% at 96.25% 106.25%, #5887FF 16.15%, #FFA0FB 72.4%), radial-gradient(143.34% 143.34% at 12.5% 115%, #FF7DD3 31.8%, #FF9191 75.7%)',
  'radial-gradient(143.34% 143.34% at 12.5% 115%, #FF7DD3 31.8%, #FF9191 75.7%)',
];

const simpleHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

const useGradient = (username: string) => {
  if (!username) {
    return gradients[0];
  }

  const hash = simpleHash(username);
  const gradientIndex = hash % gradients.length;
  return gradients[gradientIndex];
};

export default useGradient;

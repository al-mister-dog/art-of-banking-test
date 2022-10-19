export const overdraft = 0;
export const reserveRequirement = 0;
export const interestRate = 0;

export interface ColorSettings {
  round: boolean;
  static: boolean;
  flash: boolean;
  off: boolean;
}

export interface DisplaySettings {
  balances: boolean;
  taccounts: boolean;
  spreadsheet: boolean;
}

export const colorSettings: ColorSettings = {
  round: true,
  static: false,
  flash: false,
  off: false,
};

export const displaySettings: DisplaySettings = {
  balances: true,
  taccounts: false,
  spreadsheet: false,
};

export interface ClaveroSettings {
  each: boolean;
  all: boolean;
}

export const spreadsheetSettings: ClaveroSettings = {
  each: false,
  all: true,
};

export const sliderSettings = {
  0: {
    sliderSettings: {
      overdraft: true,
      reserveRequirement: true,
      interestRate: true,
    },
  },
  1: {
    sliderSettings: {
      overdraft: true,
      reserveRequirement: true,
      interestRate: true,
    },
  },
  2: {
    sliderSettings: {
      overdraft: true,
      reserveRequirement: true,
      interestRate: true,
    },
  },
  3: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: true,
      interestRate: true,
    },
  },
  4: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: false,
      interestRate: false,
    },
  },
  5: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: false,
      interestRate: true,
    },
  },
  6: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: false,
      interestRate: true,
    },
  },
  7: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: false,
      interestRate: true,
    },
  },
  8: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: false,
      interestRate: true,
    },
  },
  9: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: false,
      interestRate: true,
    },
  },
  10: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: false,
      interestRate: true,
    },
  },
  11: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: true,
      interestRate: true,
    },
  },
  12: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: true,
      interestRate: true,
    },
  },
  13: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: true,
      interestRate: true,
    },
  },
  14: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: true,
      interestRate: true,
    },
  },
  15: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: true,
      interestRate: false,
    },
    sliderFixtures: {
      overdraft: 10,
    },
  },
  16: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: true,
      interestRate: false,
    },
    sliderFixtures: {
      overdraft: 100,
    },
  },
  17: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: true,
      interestRate: false,
    },
    sliderFixtures: {
      overdraft: 100,
    },
  },
  18: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: true,
      interestRate: false,
    },
    sliderFixtures: {
      overdraft: 100,
    },
  },
  19: {
    sliderSettings: {
      overdraft: false,
      reserveRequirement: true,
      interestRate: false,
    },
    sliderFixtures: {
      overdraft: 100,
    },
  },
};

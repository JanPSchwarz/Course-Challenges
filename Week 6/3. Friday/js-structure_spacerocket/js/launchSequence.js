// Implement the launch sequence function here and export it as the default export.

import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";
import { countdown } from "./core/countdown.js";

export default function launch() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);

  fuel();

  for (let i = 1; i <= 5; i++) {
    countdown();
  }

  liftoff();

  deployPayload();
}

// loadPayload(NFSAT);
// loadPayload(FISHSAT);

// fuel();

// for (let i = 0; i <= 0; i++) {
//     liftoff();
// }

// deployPayload();

/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

describe("services page", () => {
  it("should load the default services page", () => {
    cy.visit("/services.html");

    // Take a snapshot for visual diffing
    cy.percySnapshot("services page | default");
  });
});

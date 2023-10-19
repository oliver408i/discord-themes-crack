// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const DYNAMIC_SCRIPT_ID = 'dynamic-script';

async function isDynamicContentScriptRegistered() {
  const scripts = await chrome.scripting.getRegisteredContentScripts();
  return scripts.some((s) => s.id === DYNAMIC_SCRIPT_ID);
}

document
  .querySelector('#register-dynamic')
  .addEventListener('click', async () => {
    const persistAcrossSessions =
      document.querySelector("[name='persist']").value === 'yes';
    const matches = document.querySelector("[name='matches']").value;
    const runAt = document.querySelector("[name='run-at']").value;
    const allFrames =
      document.querySelector("[name='persist']").value === 'yes';
    const world = document.querySelector("[name='world']").value;

    await chrome.scripting.registerContentScripts([
      {
        id: DYNAMIC_SCRIPT_ID,
        js: ['content-script.js'],
        persistAcrossSessions,
        matches: [matches],
        runAt,
        allFrames,
        world
      }
    ]);

    updateUI();
  });

document
  .querySelector('#unregister-dynamic')
  .addEventListener('click', async () => {
    await chrome.scripting.unregisterContentScripts({
      ids: [DYNAMIC_SCRIPT_ID]
    });
    updateUI();
  });

const DYNAMIC_TAB_SELECTOR = "[name='type'][value='dynamic']";

function updateUI() {
  const type = 'dynamic';

  // Only show some fields for dynamic scripts.
  document.querySelector("[name='run-at']").parentElement.style.display =
    type === 'dynamic' ? '' : 'none';
  document.querySelector("[name='persist']").parentElement.style.display =
    type === 'dynamic' ? '' : 'none';
  document.querySelector("[name='all-frames']").parentElement.style.display =
    type === 'dynamic' ? '' : 'none';
  document.querySelector("[name='matches']").parentElement.style.display =
    type === 'dynamic' ? '' : 'none';
  document.querySelector('.hint').style.display =
    type === 'dynamic' ? '' : 'none';

  document.querySelector('.dynamic-buttons').style.display =
    type === 'dynamic' ? 'flex' : 'none';

  // Decide if the register or unregister button is visible for dynamic scripts.
  isDynamicContentScriptRegistered().then((dynamicContentScriptRegistered) => {
    document
      .querySelector('#register-dynamic')
      .toggleAttribute('disabled', dynamicContentScriptRegistered);
    document
      .querySelector('#unregister-dynamic')
      .toggleAttribute('disabled', !dynamicContentScriptRegistered);
  });
}

updateUI();

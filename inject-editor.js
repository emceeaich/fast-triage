// mozilla license boilerplate here

function preflight() {

  var apiToken = null;

  console.log("api token via window.wrappedJSObject", window.wrappedJSObject.BUGZILLA.api_token);

  if (window.wrappedJSObject.BUGZILLA && window.wrappedJSObject.BUGZILLA.api_token) {
    apiToken = window.wrappedJSObject.BUGZILLA.api_token;
  }

  if (apiToken !== null) {
    fetchBugData(apiToken);
  } else if (apiToken === null) {
    alert("You need to be logged into Bugzilla.");
  }

}

function fetchBugData(apiToken) {
  injectEditorView();
}

function injectEditorView() {
  var injected = document.createElement('div');
  injected.className = 'injected';
  injected.innerHTML = '<table><tr><th>Priority</th><th>Severity</th><th>Status FFx 48</th><th>Status FFx 49</th><th>Status FFx 50</th><th>Status FFx 51</th><td><span class="dismiss" title="Dismiss">[X]</span></td></tr><tr><td><select id="override-priority"><option value="--">Not Set</option><option value="P1">P1: Fix Now</option><option value="P2">P2: Fix Next</option><option value="P3">P3: Backlog</option><option value="P4">P4: Not Used</option><option value="P5">P5: Will Accept Patch</option></select></td><td><select id="override-severity"><option value="">Bug</option><option value="">Enhancement</option><option value="">Other</option></select></td><td><select id="cf_status_firefox48" name="cf_status_firefox48"><option value="---" id="v2672_cf_status_firefox48" selected="">---</option><option value="?" id="v2673_cf_status_firefox48">?</option><option value="unaffected" id="v2674_cf_status_firefox48">unaffected</option><option value="affected" id="v2675_cf_status_firefox48">affected</option><option value="fix-optional" id="v2873_cf_status_firefox48">fix-optional</option><option value="fixed" id="v2676_cf_status_firefox48">fixed</option><option value="wontfix" id="v2677_cf_status_firefox48">wontfix</option><option value="verified" id="v2678_cf_status_firefox48">verified</option><option value="disabled" id="v2679_cf_status_firefox48">disabled</option><option value="verified disabled" id="v2680_cf_status_firefox48">verified disabled</option></select></td><td><select id="cf_status_firefox49" name="cf_status_firefox49"><option value="---" id="v2672_cf_status_firefox49" selected="">---</option><option value="?" id="v2673_cf_status_firefox49">?</option><option value="unaffected" id="v2674_cf_status_firefox49">unaffected</option><option value="affected" id="v2675_cf_status_firefox49">affected</option><option value="fix-optional" id="v2873_cf_status_firefox49">fix-optional</option><option value="fixed" id="v2676_cf_status_firefox49">fixed</option><option value="wontfix" id="v2677_cf_status_firefox49">wontfix</option><option value="verified" id="v2678_cf_status_firefox49">verified</option><option value="disabled" id="v2679_cf_status_firefox49">disabled</option><option value="verified disabled" id="v2680_cf_status_firefox49">verified disabled</option></select></td><td><select id="cf_status_firefox50" name="cf_status_firefox50"><option value="---" id="v2672_cf_status_firefox50" selected="">---</option><option value="?" id="v2673_cf_status_firefox50">?</option><option value="unaffected" id="v2674_cf_status_firefox50">unaffected</option><option value="affected" id="v2675_cf_status_firefox50">affected</option><option value="fix-optional" id="v2873_cf_status_firefox50">fix-optional</option><option value="fixed" id="v2676_cf_status_firefox50">fixed</option><option value="wontfix" id="v2677_cf_status_firefox50">wontfix</option><option value="verified" id="v2678_cf_status_firefox50">verified</option><option value="disabled" id="v2679_cf_status_firefox50">disabled</option><option value="verified disabled" id="v2680_cf_status_firefox50">verified disabled</option></select></td><td><select id="cf_status_firefox51" name="cf_status_firefox51"><option value="---" id="v2672_cf_status_firefox51" selected="">---</option><option value="?" id="v2673_cf_status_firefox51">?</option><option value="unaffected" id="v2674_cf_status_firefox51">unaffected</option><option value="affected" id="v2675_cf_status_firefox51">affected</option><option value="fix-optional" id="v2873_cf_status_firefox51">fix-optional</option><option value="fixed" id="v2676_cf_status_firefox51">fixed</option><option value="wontfix" id="v2677_cf_status_firefox51">wontfix</option><option value="verified" id="v2678_cf_status_firefox51">verified</option><option value="disabled" id="v2679_cf_status_firefox51">disabled</option><option value="verified disabled" id="v2680_cf_status_firefox51">verified disabled</option></select></td><td><button>Save Changes</button></td></tr><tr><th>Keywords</th>   <td colspan="6"><input type="checkbox" id="is-regression" checked> Regression<input type="checkbox" id="regressionrange-wanted"> Regression Range Wanted<input type="checkbox" id="is-good-first-bug"> Good First Bug<td></tr><tr><th>Comments</th><td colspan="6">Bug is marked as regression but no range specified</td></tr></table>';

  document.body.appendChild(injected);
  injected.querySelector('.dismiss').addEventListener("click", dismissEditorView);
}

function dismissEditorView() {
  document.querySelector('.injected').remove();
}

preflight();


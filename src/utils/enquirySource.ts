// A link such as theoakland.in/?from=instagram says where the visitor came from.
// It is remembered while they browse, and sent with the enquiry so the ERP can record it.
const KEY = 'enquiryFrom';

export function rememberEnquirySource() {
  const from = new URLSearchParams(window.location.search).get('from');
  try {
    if (from) sessionStorage.setItem(KEY, from);
  } catch {
    // Storage is blocked (private mode): the enquiry is still sent, just without the source.
  }
}

export function enquirySource(): string {
  try {
    return sessionStorage.getItem(KEY) ?? '';
  } catch {
    return '';
  }
}

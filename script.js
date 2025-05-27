/*
  // Form submission for website comparison
  document.getElementById('checkForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const inputUrl = urlInput.value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');

    const knownOriginalDomains = [
      'www.facebook.com',
      'www.google.com',
      'www.apple.com',
      'www.microsoft.com',
      'www.amazon.com',
      'www.flipkart.com',
      'netflix.com',
      'www.bewakoof.com',
      'www.twitter.com',
      'www.linkedin.com',
      'www.instagram.com',
      'www.paypal.com',
      'www.cybercrime.gov.in',
      'www.hdfcbank.com',
      'www.icicibank.com',
      'www.bankofamerica.com',
      'i4c.mha.gov.in',
      'www.mha.gov.in',
      'www.axisbank.com',
      'www.yesbank.in',
      'www.indianbank.in',
      'www.bankofindia.co.in',
      'www.boiusa.com',
      'myaadhaar.uidai.gov.in',
      'www.onlinesbi.sbi',
      'www.myntra.com',
      'www.meesho.com'
    ];

    const suspiciousPatterns = ['-', 'login', 'secure', 'verify', 'account', 'update', 'support', 'webscr', 'banking'];
    const isSuspicious = suspiciousPatterns.some(pattern => inputUrl.includes(pattern));

    const normalizePhishingTricks = (url) =>
      url.replace(/0/g, 'o')
         .replace(/1/g, 'l')
         .replace(/i/g, 'l')
         .replace(/3/g, 'e')
         .replace(/5/g, 's')
         .replace(/7/g, 't')
         .replace(/@/g, 'a');

    const normalizedInput = normalizePhishingTricks(inputUrl);

    const extractBase = (url) => {
      return url.replace(/^https?:\/\//, '')
                .replace(/^www\./, '')
                .split('.')[0];
    };

    const inputBase = extractBase(normalizedInput);

    const exactMatch = knownOriginalDomains.includes(inputUrl);
    const tldMatch = knownOriginalDomains.find(domain => extractBase(domain) === inputBase && domain !== inputUrl);
    const looksLike = knownOriginalDomains.find(domain => getSimilarity(domain, normalizedInput) > 0.7);

    let message = '';

    if (exactMatch) {
      message = `<p style="color:green;">✅ <strong>${inputUrl}</strong> is a known original website.</p>`;
    } else if (tldMatch) {
      message = `<p style="color:orange;">
        ⚠️ <strong>${inputUrl}</strong> uses a different domain extension but matches the base name of <strong>${tldMatch}</strong>.<br>
        It may be a cloned or fake version of the original website.
      </p>`;
    } else if (isSuspicious || looksLike) {
      message = `<p style="color:red;">⚠️ <strong>${inputUrl}</strong> looks suspicious and may be a fake or phishing site.`;

      if (looksLike) {
        message += `<br>🔍 This website is similar to: <strong>${looksLike}</strong>`;
      }

      message += `</p>`;
    } else {
      message = `<p style="color:red;">❗ <strong>${inputUrl}</strong> is not recognized. It may be a cloned website. Proceed with caution.</p>`;
    }

    resultDiv.innerHTML = message;
  });

  // Simple similarity check (Levenshtein Ratio)
  function getSimilarity(a, b) {
    let longer = a;
    let shorter = b;
    if (a.length < b.length) {
      longer = b;
      shorter = a;
    }
    const longerLength = longer.length;
    if (longerLength === 0) return 1.0;
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
  }

  function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
        if (i === 0)
          costs[j] = j;
        else {
          if (j > 0) {
            let newValue = costs[j - 1];
            if (s1.charAt(i - 1) !== s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }
});


// cookies-banner
window.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const declineBtn = document.getElementById('decline-cookies');

  // Show cookie banner after 5 seconds
  setTimeout(() => {
    banner.style.display = 'block';
  }, 5000);

  acceptBtn.addEventListener('click', () => {
    banner.style.display = 'none';
    // Optionally store user consent in localStorage
    localStorage.setItem('cookiesAccepted', 'true');
  });

  declineBtn.addEventListener('click', () => {
    banner.style.display = 'none';
    window.location.href = 'goodbye.html';
  });

  // Optional: Skip banner if already accepted
  if (localStorage.getItem('cookiesAccepted') === 'true') {
    banner.style.display = 'none';
  }
});
*/


/* 23052025
// Form submission for website comparison
document.getElementById('checkForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const urlInput = document.getElementById('urlInput');
  const inputUrl = urlInput.value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');

  const knownOriginalDomains = [
    'www.facebook.com', 'www.google.com', 'www.apple.com', 'www.microsoft.com',
    'www.amazon.com', 'www.flipkart.com', 'netflix.com', 'www.bewakoof.com',
    'www.twitter.com', 'www.linkedin.com', 'www.instagram.com', 'www.paypal.com',
    'www.cybercrime.gov.in', 'www.hdfcbank.com', 'www.icicibank.com', 'www.bankofamerica.com',
    'i4c.mha.gov.in', 'www.mha.gov.in', 'www.axisbank.com', 'www.yesbank.in',
    'www.indianbank.in', 'www.bankofindia.co.in', 'www.boiusa.com', 'myaadhaar.uidai.gov.in',
    'www.onlinesbi.sbi', 'www.myntra.com', 'www.meesho.com'
  ];

  const suspiciousPatterns = ['-', 'login', 'secure', 'verify', 'account', 'update', 'support', 'webscr', 'banking'];
  const isSuspicious = suspiciousPatterns.some(pattern => inputUrl.includes(pattern));

  const normalizePhishingTricks = (url) =>
    url.replace(/0/g, 'o')
       .replace(/1/g, 'l')
       .replace(/i/g, 'l')
       .replace(/3/g, 'e')
       .replace(/5/g, 's')
       .replace(/7/g, 't')
       .replace(/@/g, 'a');

  const normalizedInput = normalizePhishingTricks(inputUrl);

  const extractBase = (url) => {
    return url.replace(/^https?:\/\//, '')
              .replace(/^www\./, '')
              .split('.')[0];
  };

  const inputBase = extractBase(normalizedInput);

  const exactMatch = knownOriginalDomains.includes(inputUrl);
  const tldMatch = knownOriginalDomains.find(domain => extractBase(domain) === inputBase && domain !== inputUrl);
  const looksLike = knownOriginalDomains.find(domain => getSimilarity(domain, normalizedInput) > 0.7);

  let message = '';

  if (exactMatch) {
    message = `<p style="color:green;">✅ <strong>${inputUrl}</strong> is a known original website.</p>`;
  } else if (tldMatch) {
    message = `<p style="color:orange;">
      ⚠️ <strong>${inputUrl}</strong> uses a different domain extension but matches the base name of <strong>${tldMatch}</strong>.<br>
      It may be a cloned or fake version of the original website.
    </p>`;
  } else if (isSuspicious || looksLike) {
    message = `<p style="color:red;">⚠️ <strong>${inputUrl}</strong> looks suspicious and may be a fake or phishing site.`;

    if (looksLike) {
      message += `<br>🔍 This website is similar to: <strong>${looksLike}</strong>`;
    }

    message += `</p>`;
  } else {
    message = `<p style="color:red;">❗ <strong>${inputUrl}</strong> is not recognized. It may be a cloned website. Proceed with caution.</p>`;
  }

  resultDiv.innerHTML = message;
});

// Simple similarity check (Levenshtein Ratio)
function getSimilarity(a, b) {
  let longer = a;
  let shorter = b;
  if (a.length < b.length) {
    longer = b;
    shorter = a;
  }
  const longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newValue = costs[j - 1];
        if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

// Cookie banner logic
window.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const declineBtn = document.getElementById('decline-cookies');

  // Show cookie banner after 5 seconds
  setTimeout(() => {
    banner.style.display = 'block';
  }, 5000);

  acceptBtn.addEventListener('click', () => {
    banner.style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
  });

  declineBtn.addEventListener('click', () => {
    banner.style.display = 'none';
    window.location.href = 'goodbye.html';
  });

  if (localStorage.getItem('cookiesAccepted') === 'true') {
    banner.style.display = 'none';
  }
});
*/


document.getElementById('checkForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const inputUrl = document.getElementById('urlInput').value.trim().toLowerCase();
  const resultDiv = document.getElementById('result');

  const knownOriginalDomains = [
    'www.facebook.com', 'www.google.com', 'www.apple.com', 'www.microsoft.com',
    'www.amazon.com', 'www.flipkart.com', 'netflix.com', 'www.bewakoof.com',
    'www.twitter.com', 'www.linkedin.com', 'www.instagram.com', 'www.paypal.com',
    'www.cybercrime.gov.in', 'www.hdfcbank.com', 'www.icicibank.com',
    'www.bankofamerica.com', 'i4c.mha.gov.in', 'www.mha.gov.in',
    'www.axisbank.com', 'www.yesbank.in', 'www.indianbank.in',
    'www.bankofindia.co.in', 'www.boiusa.com', 'myaadhaar.uidai.gov.in',
    'www.onlinesbi.sbi', 'www.myntra.com', 'www.meesho.com'
  ];

  const suspiciousPatterns = ['-', 'login', 'secure', 'verify', 'account', 'update', 'support', 'webscr', 'banking'];
  const isSuspicious = suspiciousPatterns.some(pattern => inputUrl.includes(pattern));

  const normalizePhishingTricks = (url) =>
    url.replace(/0/g, 'o').replace(/1/g, 'l').replace(/i/g, 'l')
       .replace(/3/g, 'e').replace(/5/g, 's').replace(/7/g, 't').replace(/@/g, 'a');

  const normalizedInput = normalizePhishingTricks(inputUrl);

  const extractBase = (url) => {
    return url.replace(/^https?:\/\//, '')
              .replace(/^www\./, '')
              .split('.')[0];
  };

  const inputBase = extractBase(normalizedInput);

  const exactMatch = knownOriginalDomains.includes(inputUrl);
  const tldMatch = knownOriginalDomains.find(domain => extractBase(domain) === inputBase && domain !== inputUrl);
  const looksLike = knownOriginalDomains.find(domain => getSimilarity(domain, normalizedInput) > 0.7);

  let message = '';

  if (exactMatch) {
    message = `<p style="color:green;">✅ <strong>${inputUrl}</strong> is a known original website.</p>`;
  } else if (tldMatch) {
    message = `<p style="color:blue;">⚠️ <strong style="color: black">${inputUrl}</strong> uses a different domain extension but matches the base name of <strong style="color: black">${tldMatch}</strong>. It may be a cloned or fake version of the original website.</p>`;
  } else if (isSuspicious || looksLike) {
    message = `<p style="color:red;">⚠️ <strong>${inputUrl}</strong> looks suspicious and may be a fake or phishing site.`;
    if (looksLike) {
      message += `<br>🔍 This website is similar to: <strong>${looksLike}</strong>`;
    }
    message += `</p>`;
  } else {
    message = `<p style="color:red;">❗ <strong>${inputUrl}</strong> is not recognized. It may be a cloned website. Proceed with caution.</p>`;
  }

  resultDiv.innerHTML = message;
});

function getSimilarity(a, b) {
  let longer = a.length > b.length ? a : b;
  let shorter = a.length > b.length ? b : a;
  const longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newValue = costs[j - 1];
        if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

// Cookie banner logic


window.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const declineBtn = document.getElementById('decline-cookies');

  setTimeout(() => {
    /*if (!localStorage.getItem('cookiesAccepted')) {*/
      banner.style.display = 'block';
    }
  ,2000);

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    banner.style.display = 'none';
  });

  declineBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'false');
    // may not work in some browsers
    window.location.href = 'goodbye.html'; // fallback
  });
});


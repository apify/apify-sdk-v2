/* eslint-disable */
window.addEventListener('load', function() {
    if (new URL(location.href).pathname === '/') {
        return;
    }

    const html = `
        <h2 style="border: 3px solid #ff9012; border-radius: 20px; padding: 20px; box-shadow: 2px 2px 10px #ccc; margin: 70px auto -30px; max-width: 1400px; width: 100%; text-align: center">
            Apify SDK v2 is no longer maintained. Check out <a href="https://crawlee.dev/docs/upgrading/upgrading-to-v3" target="_blank">Crawlee</a>, its successor!
        </h2>
    `;
    document.querySelector('.fixedHeaderContainer').insertAdjacentHTML('afterend', html);
});

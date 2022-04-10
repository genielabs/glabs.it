const template = `
<div class="glitch-embed-wrap" style="height: 514px; width: 100%;margin: 1em auto 1.3em;padding-top:32px;padding-bottom:32px">
  <iframe
    sandbox="allow-same-origin allow-scripts allow-forms allow-top-navigation-by-user-activation allow-popups"
    src="https://glitch.com/embed/#!/embed/{{ projectName }}?previewSize=50&sidebarCollapsed=false&previewFirst=true&attributionHidden=true"
    alt="{{ projectName }} on glitch"
    style="height: 100%; width: 100%; border: 0;margin:0;"
    loading="lazy"></iframe>
</div>
`;
module.exports = (render, content, projectName) => {
  return render(template, {content, projectName});
};

const linksSocialMedia = {
  github: "DiogoBozan",
  youtube: "diogobozan",
  twitter: "diogobozan",
  facebook: "diogobozan",
  instagram: "bozan.d.f",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}
changeSocialMediaLinks();

function getGitHibProfileInfos() {
  const urlGit = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(urlGit)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userPhoto.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitHibProfileInfos();

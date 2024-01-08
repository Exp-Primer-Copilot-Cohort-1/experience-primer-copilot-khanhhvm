function skillsMember() {
  const skills = document.querySelector('.skills');
  const skillsMember = document.querySelectorAll('.skills-member');
  const skillsMemberClose = document.querySelectorAll('.skills-member-close');
  const skillsMemberCloseAll = document.querySelector('.skills-member-close-all');

  skillsMember.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target;
      const parent = target.closest('.skills-member');
      const parentActive = document.querySelector('.skills-member.active');

      if (parentActive) {
        parentActive.classList.remove('active');
        parent.classList.add('active');
      } else {
        parent.classList.add('active');
      }
    });
  });

  skillsMemberClose.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = e.target.closest('.skills-member');
      parent.classList.remove('active');
    });
  });

  skillsMemberCloseAll.addEventListener('click', (e) => {
    e.preventDefault();
    skillsMember.forEach((item) => {
      item.classList.remove('active');
    });
  });

  skills.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest('.skills-member') && !target.classList.contains('skills-member-close')) {
      skillsMember.forEach((item) => {
        item.classList.remove('active');
      });
    }
  });
}
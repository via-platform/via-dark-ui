const root = document.documentElement;

module.exports = {
    activate: state => {
        via.config.observe('via-dark-ui.fontSize', value => {
            setFontSize(value);
        });

        via.config.observe('via-dark-ui.tabSizing', value => {
            setTabSizing(value);
        });

        via.config.observe('via-dark-ui.hideDockButtons', value => {
            setHideDockButtons(value);
        });
    },
    deactivate: () => {
        unsetFontSize();
        unsetTabSizing();
        unsetHideDockButtons();
    }
};

const setFontSize = currentFontSize => {
    if (Number.isInteger(currentFontSize)) {
        root.style.fontSize = `${currentFontSize}px`;
    } else if (currentFontSize === 'Auto') {
        unsetFontSize();
    }
};

const unsetFontSize = () => {
    root.style.fontSize = '';
};


const setTabSizing = tabSizing => {
    root.setAttribute('theme-via-dark-ui-tabsizing', tabSizing.toLowerCase());
};

const unsetTabSizing = () => {
    root.removeAttribute('theme-via-dark-ui-tabsizing');
};


const setHideDockButtons = hideDockButtons => {
    if (hideDockButtons) {
        root.setAttribute('theme-via-dark-ui-dock-buttons', 'hidden');
    } else {
        unsetHideDockButtons();
    }
};

const unsetHideDockButtons = () => {
    root.removeAttribute('theme-via-dark-ui-dock-buttons');
};

import './FyloDataStorage.scss'

import iconLogoSvg from './assets/logo.svg';
import iconFolderSvg from './assets/icon-folder.svg';
import iconDocumentSvg from './assets/icon-document.svg';
import iconUploadSvg from './assets/icon-upload.svg';

function FyloDataStorage({used, max}: { used: number, max: number }) {
    return (<article className={'storage-component'}>
        <header>
            <img src={iconLogoSvg} alt="fylo logo"/>
            <div>
                <button><img src={iconDocumentSvg} alt=""/></button>
                <button><img src={iconFolderSvg} alt=""/></button>
                <button><img src={iconUploadSvg} alt=""/></button>
            </div>

        </header>
        <div className={'info'}>
            <p>You've used <span className={'font-bold'}>{used}&nbsp;GB</span> of your storage</p>

            <div className="progress-bar">
                <div className={'progress-used'} style={{width: `${((used / max) * 100)}%`}}></div>
                <progress max={max} value={used}>{used}GB</progress>
            </div>

            <p className={'start-end'}><span className={'font-bold'}>0&nbsp;GB</span><span
                className={'font-bold'}>{max}&nbsp;GB</span></p>

            <div className={'storage-left'}>{max - used}<span>&nbsp;&nbsp;GB left</span>

                <div className="arrow-left"></div>
            </div>
        </div>
    </article>);
}

export default FyloDataStorage;
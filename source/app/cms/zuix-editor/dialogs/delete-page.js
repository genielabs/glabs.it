/**
 * @param {ContextController} cp
 */
function deletePageDialog(cp) {
  const _browserSync = ___browserSync___;
  let _data;
  cp.create = onCreate;

  function onCreate() {
    cp.expose({open, close})
        .view().hide();

    cp.field('delete-btn').on('click', deletePage);
    cp.field('cancel-btn').on('click', cancel);

    if (_browserSync) {
      _browserSync.socket.on('zuix:deletePage:done', function(redirectUrl) {
        if (redirectUrl === '/content') {
          redirectUrl ='/';
        }
        document.location.href = redirectUrl + '#waitReload';
      });
    }
  }

  function open(data, $opener) {
    _data = data;
    setError('');
    cp.model({
      'page-title': data.title,
      'page-path': data.page.url
    });
    cp.view().show();
    cp.trigger('open', $opener);
    cp.field('cancel-btn')
        .get().focus();
    return cp.context;
  }
  function close() {
    cp.trigger('close');
  }
  function cancel() {
    cp.trigger('cancel');
  }

  function setError(err) {
    if (err !== '') {
      err = 'ERROR: ' + err;
    }
    cp.field('error-message').html(err);
  }

  function deletePage(e, $btn) {
    $btn.attr({disabled: true});
    let result;
    if (_browserSync) {
      result = _browserSync.socket.emit('zuix:deletePage', _data);
    }
    if (result) {
      cp.trigger('waiting');
    } else {
      setError('Could not send command');
    }
  }
}

module.exports = deletePageDialog;

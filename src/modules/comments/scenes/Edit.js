import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './styles.css';

import PricesBox from '../../_common/PricesBox/'
import ButtonIcon from '../../_common/ButtonIcon/'
import Alert from '../../_common/Alert/';

import * as actions from '../actions';

import { withHooks } from '../../../utils/withHooks';

const Edit = props => {
  const {
    status,
    formData,
    handleOnChange,
    handlePostComment
  } = props;

  return (
    <PricesBox
      title='Dejá un comentario'
    >
      <div className='comments-container'>
        <p>¿Querés sugerir una funcionalidad, te encontraste con un error o querés saludar a la creadora? Este es el lugar para dejar tu comentario.</p>
        { status === 'success' && (
          <Alert
            type='success'
            display={true}
            text='🎉 Comentario enviado. Gracias!'
          />
        )}
        <textarea name="text" value={formData.text} onChange={handleOnChange} className='comments-input' />
        <Link to='prices'>
          <ButtonIcon
            icon='times'
            type='secondary'
            label='Cancelar'
          />
        </Link>
        <ButtonIcon
          type='primary'
          label='Enviar comentario'
          icon='paper-plane'
          style={{ marginLeft: '20px' }}
          onClick={handlePostComment}
        />
      </div>
    </PricesBox>
  );
};


const mapStateToProps = state => ({
  status: state.comments.status,
  formData: state.comments.formData
});

const mapDispatchToProps = dispatch => ({
  onUnMount: () => dispatch(actions.cleanState()),
  handlePostComment: () => dispatch(actions.create()),
  handleOnChange: (e) => dispatch(actions.onChange({ label: e.target.name, value: e.target.value }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(Edit));

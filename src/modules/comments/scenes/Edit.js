import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './styles.css';

import PricesBox from '../../_common/PricesBox/'
import ButtonIcon from '../../_common/ButtonIcon/'
import InputText from '../../_common/InputSign';
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
      <div className='comments-container' style={{ paddingBottom: '20px' }}>
        <p>¿Querés sugerir una funcionalidad, te encontraste con un error o querés saludar a la creadora? Este es el lugar para dejar tu comentario.</p>
        { status === 'success' && (
          <Alert
            type='success'
            display={true}
            text='🎉 Comentario enviado. Gracias!'
          />
        )}
        <div>
          <InputText
            name='name'
            type='text'
            placeholder='Tu nombre'
            value={formData.name}
            onChange={handleOnChange}
            style={{
              marginRight: '15px',
              marginBottom: '15px',
              width: '180px'
            }}
          />
          <InputText
            name='email'
            type='text'
            placeholder='E-mail'
            value={formData.email}
            onChange={handleOnChange}
            style={{
              marginRight: '15px',
              marginBottom: '15px',
              width: '200px'

            }}
          />
        </div>
        <textarea name='text' value={formData.text} onChange={handleOnChange} className='comments-input' />
        <Link to='prices'>
          <ButtonIcon
            icon='long-arrow-left'
            type='secondary'
            label='Volver'
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
  onUnmount: () => dispatch(actions.cleanState()),
  handlePostComment: () => dispatch(actions.create()),
  handleOnChange: (e) => dispatch(actions.onChange({ label: e.target.name, value: e.target.value }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(Edit));

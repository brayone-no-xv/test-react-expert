import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {asyncAddThread} from '../states/threads/action';

function CreateThreadPage() {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {authUser} = useSelector((state) => state);

  useEffect(() => {
    if (!authUser) {
      navigate('/login');
    }
  }, [authUser, navigate]);

  if (!authUser) {
    return null;
  }

  const onSubmit = async ({title, body, category}) => {
    try {
      await dispatch(asyncAddThread({title, body, category: category || ''}));
      navigate('/');
      alert('Thread berhasil dibuat!');
    } catch (_error) {
    }
  };

  return (
    <div className="create-thread-page">
      <div className="container">
        <div className="create-thread-card">
          <h2>Buat Thread Baru</h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="create-thread-form"
          >
            <div className="form-group">
              <label htmlFor="title">Judul Thread</label>
              <input
                type="text"
                id="title"
                placeholder="Masukkan judul thread"
                {...register('title', {
                  required: 'Judul thread wajib diisi',
                  minLength: {
                    value: 3,
                    message: 'Judul minimal 3 karakter',
                  },
                })}
              />
              {errors.title && (
                <span className="form-error">{errors.title.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="category">Kategori</label>
              <input
                type="text"
                id="category"
                placeholder="Masukkan kategori (opsional)"
                {...register('category')}
              />
            </div>

            <div className="form-group">
              <label htmlFor="body">Konten Thread</label>
              <textarea
                id="body"
                placeholder="Tulis konten thread Anda..."
                rows="10"
                {...register('body', {
                  required: 'Konten thread wajib diisi',
                  minLength: {
                    value: 10,
                    message: 'Konten minimal 10 karakter',
                  },
                })}
              />
              {errors.body && (
                <span className="form-error">{errors.body.message}</span>
              )}
            </div>

            <div className="form-actions">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="btn btn-secondary"
              >
                Batal
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Memproses...' : 'Buat Thread'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateThreadPage;

<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Создать</h4>
            </div>

            <form>
              <div class="input-field">
                <input
                    id="name"
                    type="text"
                >
                <label for="name">Название</label>
                <span class="helper-text invalid">Введите название</span>
              </div>

              <div class="input-field">
                <input
                    id="limit"
                    type="number"
                >
                <label for="limit">Лимит</label>
                <span class="helper-text invalid">Минимальная величина</span>
              </div>

              <button class="btn waves-effect waves-light" type="submit">
                Создать
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
        <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Редактировать</h4>
            </div>

            <form>
              <div class="input-field" >
                <select>
                  <option>Category</option>
                </select>
                <label>Выберите категорию</label>
              </div>

              <div class="input-field">
                <input type="text" id="name">
                <label for="name">Название</label>
                <span class="helper-text invalid">TITLE</span>
              </div>

              <div class="input-field">
                <input
                    id="limit"
                    type="number"
                >
                <label for="limit">Лимит</label>
                <span class="helper-text invalid">LIMIT</span>
              </div>

              <button class="btn waves-effect waves-light" type="submit">
                Обновить
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

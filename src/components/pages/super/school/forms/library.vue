<template>
    <div>
        <b-card header="School Library Information" header-tag="h4" class="bg-header-card">
            <form method="" class="form-horizontal" @submit.prevent="onSubmit">
                <div class="mb-3">
                    <a class="btn btn-outline-primary pull-right" @click="addMore('pupil')">+ ADD MORE</a>
                    <div>
                        PUPILS TEXTBOOKS SUPPLIED
                    </div>
                    <div>
                        State the number of Pupils' Textbooks supplied to the school in the current academic
                        year.
                    </div>
                </div>
                <div class="row bordered-bottom">
                    <div class="col-sx-12 col-md-6" v-for="(pupil, index) in data.textbooks.pupil">
                        <div class="form-horizonal bordered-box">
                            <div class="row even-row">
                                <div class="col-md-12">
                                    <div class="remove-btn-div"><a class=" btn-sm btn btn-outline-danger pull-right red"
                                                                   @click="removeElement('pupil', index)">X</a></div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12">Subject Area
                                        </label>
                                        <select v-model="data.textbooks.pupil[index].subject" name="pupil_subject_area"
                                                class="form-control" size="1">
                                            <option value="">Select Subject</option>
                                            <option v-for="subjects in subjectArea" :value="subjects.id">
                                                {{subjects.subject}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label">Class Level
                                        </label>
                                        <select class="form-control" v-model="data.textbooks.pupil[index].level"
                                                size="1">
                                            <option value="">Select Class</option>
                                            <option value="1">Pry 1</option>
                                            <option value="2">Pry 2</option>
                                            <option value="3">Pry 3</option>
                                            <option value="4">Pry 4</option>
                                            <option value="5">Pry 5</option>
                                            <option value="6">Pry 6</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-2 col-md-2">
                                    <div class="form-group p-10">
                                        <label class="control-label">Quantity
                                        </label>
                                        <input type="number" min="0" class="form-control"
                                               name="pupil_quantity_supplied[]"
                                               v-model="data.textbooks.pupil[index].quantity">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-3 mt-5">
                    <a class="btn btn-outline-primary pull-right" @click="addMore('teacher')">+ ADD MORE</a>
                    <div>
                        TEACHERS' TEXTBOOKS SUPPLIED
                    </div>
                    <div>
                        State the number of Teachers' Textbooks supplied to the school in the current academic
                        year.
                    </div>
                </div>
                <div class="row">
                    <div class="col-sx-12 col-md-6" v-for="(teacher, index) in data.textbooks.teacher">
                        <div class="form-horizonal bordered-box">
                            <div class="row even-row">
                                <div class="col-md-12">
                                    <div class="remove-btn-div"><a class="btn btn-sm btn-outline-danger pull-right red"
                                                                   @click="removeElement('teacher', index)">X</a></div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group p-10">
                                        <label class="control-label col-md-12">Subject Area
                                        </label>
                                        <select v-model="data.textbooks.teacher[index].subject"
                                                name="teacher_subject_area" class="form-control" size="1">
                                            <option value="">Select Subject</option>
                                            <option v-for="subjects in subjectArea" :value="subjects.id">
                                                {{subjects.subject}}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-4 col-md-4">
                                    <div class="form-group p-10">
                                        <label class="control-label">Class Level
                                        </label>
                                        <select class="form-control" v-model="data.textbooks.teacher[index].level"
                                                size="1">
                                            <option value="">Select Class</option>
                                            <option value="1">Pry 1</option>
                                            <option value="2">Pry 2</option>
                                            <option value="3">Pry 3</option>
                                            <option value="4">Pry 4</option>
                                            <option value="5">Pry 5</option>
                                            <option value="6">Pry 6</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-2 col-md-2">
                                    <div class="form-group p-10">
                                        <label class="control-label">Quantity
                                        </label>
                                        <input type="number" min="0" class="form-control"
                                               name="teacher_quantity_supplied"
                                               v-model="data.textbooks.teacher[index].quantity">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-school pull-right">Submit</button>
            </form>
        </b-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>
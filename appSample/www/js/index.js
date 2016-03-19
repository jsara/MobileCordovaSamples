/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    //add listener to mobileinit event
    bindEvents: function() {
        $(document).on("mobileinit", this.onMobileInit);
    },
    // Update DOM on a Received Event
    onMobileInit: function() {
        $.mobile.defaultPageTransition = "none";
        $.mobile.defaultDialogTransition = "none";
    }
};

var communicator = (function(){

    var onSendMessage = function() {
        console.log('envia mensagem');
    };

    var onDeleteMessages = function(){
        console.log('remove mensagens');
    }

    return {
        init: function(){
            //registra os eventos de touch no botao de send-message e delete-messages
            $('#send-message').on("tap", onSendMessage);            
            $('#delete-messages').on("tap", onDeleteMessages);
        }
    };

})();


app.initialize();
communicator.init();